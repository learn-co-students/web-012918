module AuthorizationHelper

  def logged_in_user
    if session[:user_id]
      @logged_in_user =User.find(session[:user_id])
    else
      @logged_in_user = User.create
      session[:user_id] = @logged_in_user.id
    end
    @logged_in_user
  end

end