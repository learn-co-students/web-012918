Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/snacks/', to: 'snacks#index'
  get '/users/:user_id/snacks', to: 'users#users_snacks'
  post '/users/', to: 'users#create'
  post '/sessions/', to: 'sessions#create'

end
