class UsersController < ApplicationController


  def show
    gat_user
  end

  before_action :authorize_user, only: [:edit, :update]

  def authorize_user
    gat_user
    authorize(@user.id)
  end

  def edit
    gat_user
  end

  def update
    gat_user
    @user.update(user_params)
    redirect_to @user
  end


  def gat_user
    @user = User.find(params[:id])
  end


  def user_params
    params.require(:user).permit(:name)
  end




  # before_action :authorize_user!, only: [:edit, :update]

  # def show
  #   @user = gat_the_user
  # end

  # def edit
  #   @user = gat_the_user
  # end

  # def authorize_user!
  #   @user = gat_the_user
  #   authorize!(@user.id)
  # end

  # def update
  #   @user = gat_the_user
  #   @user.update(user_params)
  #   redirect_to @user
  # end

  # def gat_the_user
  #   @user ||= User.find(params[:id])
  # end

  

end
