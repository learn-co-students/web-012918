module AuthorizationHelper

  def logged_in_user
    if logged_in_user_id
      @logged_in_user ||= User.find(logged_in_user_id)
    else
      nil
    end
  end

  def logged_in_user_id
    session[:dsfklghjjkhdsfjkhfdsksfhjd]
  end


  def logged_in_user_id=(value)
    session[:dsfklghjjkhdsfjkhfdsksfhjd] = value
  end

  def log_them_out!
    session.delete(:dsfklghjjkhdsfjkhfdsksfhjd)
  end

end