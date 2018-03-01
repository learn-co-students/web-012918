Rails.application.routes.draw do

  get '/', to: 'products#index'
  get "/products/:id", to: 'products#show'

  post 'shopping_cart_line_items', to: 'shopping_cart_line_items#create'
  get 'shopping-cart', to: 'shopping_cart_line_items#index'

  # get "/users/:id", to: 'users#show'
  # get "/users/:id/edit", to: 'users#edit'
  # put "/users/:id/", to: 'users#update'

  resources :users
  resources :sessions

  get '/logout', to: 'sessions#logout'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
