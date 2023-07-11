const router = require('express').Router()

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'Salad Delish',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Vegan, Vegetarian',
        pic: '/images/salad.jpg'
    }, {
        name: 'Personal Pizza',
        city: 'Bronx',
        state: 'NY',
        cuisines: 'pizza, italian',
        pic: '/images/pizza.jpg'
        }]
           
    res.render('places/index', {places})
  })

  router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
  
module.exports = router