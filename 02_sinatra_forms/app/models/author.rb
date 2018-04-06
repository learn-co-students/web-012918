class Author < ActiveRecord::Base
  belongs_to :book

  include AuthorHelper

end
