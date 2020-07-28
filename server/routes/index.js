const express = require('express');
const router = express.Router();
const movie = require('../Models/Movie.model.js')

/* GET home page */
router.get('/', (req, res) => {
  console.log('called');
  res.json({ message: 'index' });
});


router.get('/movies', async (req, res) => {
  let moviesFromDB = await movie.find({})
  res.json({ movies: moviesFromDB})
})


router.get('/movies/:id', async (req, res) => {
  let moviesFromDB = await movie.findById(req.params.id)
  res.json({ movies: moviesFromDB})
})


router.post('/movies/new', async(req, res) => {
  let moviesFromDB = await movie.create(req.body)
  res.json({movies: 'Created'})
})

module.exports = router;
