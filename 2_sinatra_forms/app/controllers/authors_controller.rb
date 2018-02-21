class AuthorsController < Sinatra::Base
  set :views, 'app/views/authors'

  get '/authors' do
    erb :author_show
  end

end
