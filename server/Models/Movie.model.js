const mongoose = require('mongoose')

const movieSchema = mongoose.Schema ({
  title: {
    require: true,
    type:String
  },
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String]
})

const movie = mongoose.model('Movie', movieSchema)
module.exports = movie