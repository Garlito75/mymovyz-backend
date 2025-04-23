

var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const TMDB_API_KEY = process.env.TMDB_API_KEY;

router.get('/movies', (req, res) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b0943f1efc9e7698e011cdbef56a1458`)
 .then(response => response.json())
 .then(data => {
   res.json({ movies: data.results });
 });
});

module.exports = router;
