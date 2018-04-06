class ApplicationController < Sinatra::Base
  set :views, 'app/views'
  set :method_override, true

  get '/' do
    erb :home
  end

# view all books
  get '/books' do
    @books = Book.all
    erb :index
  end

  # create book form
  get '/books/new' do
    erb :new
  end

  post '/books' do
    Book.create(params)
  end

# view single book
  get '/books/:id' do
    @book = Book.find(params[:id])
    erb :'show'
  end

# edit a book
  get '/books/:id/edit' do
    @book = Book.find(params[:id])
    erb(:edit)
  end

  patch '/books/:id' do
    book = Book.find(params[:id])
    book.update(title: params[:title], snippet: params[:snippet])
    redirect "/books/#{book.id}"
  end

end
