Rails.application.routes.draw do
  resources :students, except: [:destroy, :edit, :update, :index]
  get '/students', to: 'students#index', as: 'get_all_the_students'
  get '/login', to: 'sessions#new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
