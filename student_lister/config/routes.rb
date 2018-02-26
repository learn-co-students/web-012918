Rails.application.routes.draw do
  resources :students, except: [:update, :post, :delete]
  get '/students', to: 'students#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
