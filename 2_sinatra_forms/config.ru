require_relative './config/environment'

use Rack::MethodOverride
use AuthorsController
use BooksController
run ApplicationController
