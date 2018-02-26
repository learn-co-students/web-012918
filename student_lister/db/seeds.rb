# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# students = [
#   {
#     name: 'Matt Lawford',
#     email: 'nananana@batmatt.com'
#   },
#   {
#     name: 'Laura Kim',
#     email: 'LtotheK@yahoo.com'
#   },
#   {
#     name: 'Graham Troyer-Joy',
#     email: 'telegraham@hotmail.com'
#   }
# ]

students.each {|s| Student.create(s)}
