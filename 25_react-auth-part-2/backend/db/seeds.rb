# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

50.times do
  snack = Snack.create(name: Faker::Food.dish)
end

100.times do 
  user = User.create(username: Faker::Internet.user_name, password: Faker::Internet.password)

  Snack.all.sample(10).each do |snack|
    user.snacks << snack
  end
end