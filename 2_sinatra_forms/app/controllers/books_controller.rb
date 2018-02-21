class BooksController < Sinatra::Base
  set :views, 'app/views/books'
  # set :method_override, true

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
      if @book.author
        @author = @author.name
      else
        @author = ""
      end
      erb(:edit)
    end

    patch '/books/:id' do
      book = Book.find(params[:id])
      book.update(params[:book])
      author = Author.create(params[:author])
      book.author = author
      book.save
      redirect "/books/#{book.id}"
    end

    # delete a book
    delete '/books/:id' do
      book = Book.find(params[:id])
      book.destroy
      redirect "/books"
    end

end
