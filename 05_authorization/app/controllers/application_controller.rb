class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :drop_user_cookie


  def drop_user_cookie
    helpers.logged_in_user
  end


  helper AuthorizationHelper

  def authenticate
    if !helpers.logged_in_user_id
      redirect_to "/"
    end
  end 


  def authorize(author_id)
    if !helpers.logged_in_user || helpers.logged_in_user.id != author_id
      redirect_to "/"
    end
  end 

  # before_action :drop_user_cookie

  # def drop_user_cookie
  #   helpers.logged_in_user
  # end

  # def authorize!(author_id)
  #   redirect_to "/" unless (helpers.logged_in_user.id == author_id)
  # end

end
