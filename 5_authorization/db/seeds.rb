# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


100.times do |time|
	@product = Product.new(name: Faker::Commerce.product_name)
	@product.save
end

100.times do |time|
  @user = User.new(name: Faker::Name.name)
  @user.save
end