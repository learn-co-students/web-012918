# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

# Reset the database
Trainer.all.each do |trainer|
  trainer.destroy
end

Pokemon.all.each do |pokemon|
  pokemon.destroy
end

# Build the database
trainers = [
  {name: "Laura"},
  {name: "Matt"},
  {name: "Prince"},
  {name: "Natalie"},
  {name: "Maxwell"},
  {name: "Rishi"},
  {name: "Tim"},
  {name: "Johann"},
  {name: "Meryl"},
  {name: "Steven"},
  {name: "Ashlee"},
  {name: "Graham"},
  {name: "Alex"}
]

trainers.each do |trainer|
  @trainer = Trainer.create(trainer)
  6.times do
    pokemon = { nickname: Faker::Name.first_name, species: Faker::Pokemon.name, trainer_id: @trainer.id }
    Pokemon.create(pokemon)
  end
end
