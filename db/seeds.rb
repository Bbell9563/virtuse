# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  name: 'Brianna Bell',
  age: '21',
  gender: 'female',
  email: 'Bbell9563@gmail.com',
  password: 'Sadiegirl8',
  role: 'admin',
  medical_history: 'Nothing Relavent',
  phone: '(801) 946-4684'
)
