# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Restaurant.create(name: 'Taqueria Mi Trailita', address: '301 Manor Rd.', spicy: 6, cost: 'cheap', vegetarian: 'No')
Restaurant.create(name: 'Dos Batos', address: '2525 W Anderson Ln #175', spicy: 7, cost: 'cheap', vegetarian: 'No')
Restaurant.create(name: "Torchy's Tacos", address: '2801 Guadalupe St', spicy: 7, cost: 'cheap', vegetarian: 'Yes')
Restaurant.create(name: 'Enchiladas Y Mas', address: '1911 W Anderson Ln', spicy: 5, cost: 'moderate', vegetarian: 'Yes')
Restaurant.create(name: 'Juan in a Million', address: '2300 E Cesar Chavez St', spicy: 8, cost: 'moderate', vegetarian: 'Yes')
Restaurant.create(name: 'El Azteca', address: '2600 E 7th St,', spicy: 7, cost: 'cheap', vegetarian: 'Yes')




