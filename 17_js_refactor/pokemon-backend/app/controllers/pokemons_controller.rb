class PokemonsController < ApplicationController
  def destroy
    @pokemon = Pokemon.find(params[:id])
    @pokemon.destroy

    render json: @pokemon
  end
end
