Rails.application.routes.draw do
  resources :dogs
  resources :students, only: [:show, :index]
  # get '/user_settings', 'user#settings'
  get '/students/index', to: 'students#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
