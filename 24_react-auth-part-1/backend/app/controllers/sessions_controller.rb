class SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params[:username])

    if @user && @user.authenticate(params["password"])
      render json: { user_token: token_for(@user) }  
    else
      render json: { errors: "those credentials don't match anything we've got in our database"}, :status => :unprocessable_entity
    end
  end

end
