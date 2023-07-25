const db = require('../models')

db.Place.create([{
    name: 'Mama Pot',
    city: 'Jamaica',
    state: 'NY',
    cuisines: 'Nigerian, African',
    pic: '/images/rice.jpg',
    founded: 1999
}, {
    name: 'Pizza Pan',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Pizza, Italian',
    pic: '/images/pizza.jpg',
    founded: 2020
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})
