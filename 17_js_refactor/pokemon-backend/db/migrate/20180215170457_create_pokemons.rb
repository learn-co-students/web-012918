class CreatePokemons < ActiveRecord::Migration[5.1]
  def change
    create_table :pokemons do |t|
      t.string :nickname
      t.string :species

      t.timestamps
    end

    add_reference :pokemons, :trainer
  end
end
