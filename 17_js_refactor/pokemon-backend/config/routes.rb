Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/trainers', to: 'trainers#index'
  delete '/pokemons/:id', to: 'pokemons#destroy'
end
