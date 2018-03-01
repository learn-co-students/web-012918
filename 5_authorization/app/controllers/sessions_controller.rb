class SessionsController < ApplicationController


  def new

  end


  def create
    @user = User.find_by(name: user_params[:name])

    if (@user.authenticate(user_params[:password]))
      helpers.logged_in_user_id = @user.id
      redirect_to "/"
    else
      render :new
    end
  end

  def logout
    helpers.log_them_out!
    redirect_to "/"
  end


  def user_params
    params.require(:user).permit(:name, :password)
  end
end