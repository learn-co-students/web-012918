class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def set_user

  end

  def check_active_admin
    #checks if user is an admin
  end
end
