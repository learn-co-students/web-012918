class SnacksController < ApplicationController

  before_action :authorize!

  def index
    render json: Snack.all
  end


end
