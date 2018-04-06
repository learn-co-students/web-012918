class AddAuthorIdToBooks < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :author_id, :integer
  end
end
