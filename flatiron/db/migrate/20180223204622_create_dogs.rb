class CreateDogs < ActiveRecord::Migration[5.1]
  def change
    create_table :dogs do |t|
      t.integer :age
      t.string :name
      t.string :breed

      t.timestamps
    end
  end
end
