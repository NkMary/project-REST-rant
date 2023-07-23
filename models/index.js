const mongoose = require('mongoose')
require('dotenv').config()

//MONGOOSE CONNECT
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require('./places')
module.exports.comment = require('./comment')
