class CreateShoppingCartLineItems < ActiveRecord::Migration[5.1]
  def change
    create_table :shopping_cart_line_items do |t|
      t.references :product
      t.references :user
      t.timestamps
    end
  end
end
