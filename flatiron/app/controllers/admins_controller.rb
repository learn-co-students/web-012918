class AdminsController < ApplicationController
  before_action :check_active_admin, except: [:show]

  def index
    redirect_to '/home' if not active_user
  end

end
