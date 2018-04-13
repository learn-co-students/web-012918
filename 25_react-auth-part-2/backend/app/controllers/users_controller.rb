class UsersController < ApplicationController

  skip_before_action :authenticate!, only: [:create]

  def create
    @user = User.new
    
    @user.username = params["username"]
    @user.password = params["password"]

    if @user.save

      #give them some snacks
      Snack.all.sample(10).each do |snack|
        @user.snacks << snack
      end

      render json: user_json(@user) 
    else
      render json: { errors: @user.errors.full_messages }, :status => :unprocessable_entity
    end
  end


  def authorized?
    current_user_id.to_s == params[:user_id]
  end

  def users_snacks
    unless authorized?
      render json: { take_a_hike: true}
    else
      @user = User.find_by(id: params[:user_id])
      if @user
        render json: @user.snacks
      else
        render json: true, :status => :not_found
      end
    end
  end


end
