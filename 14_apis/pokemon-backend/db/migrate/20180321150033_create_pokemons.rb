class CreatePokemons < ActiveRecord::Migration[5.1]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :species
      t.integer :user_id

      t.timestamps
    end
  end
end
