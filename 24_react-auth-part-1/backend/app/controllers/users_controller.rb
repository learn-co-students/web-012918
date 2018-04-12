class UsersController < ApplicationController

  before_action :authorize!, only: [:users_snacks]

  def create
    @user = User.new
    @user.username = params["username"]
    @user.password = params["password"]
    if @user.save
      render json: { user_token: token_for(@user) }  
    else
      render json: { errors: @user.errors.full_messages }, :status => :unprocessable_entity
    end
  end


end
