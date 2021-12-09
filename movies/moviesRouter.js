const express = require('express');

const temp;
const app = express();
const router = express.Router();

const {getMoviesList} = require("./moviesController");

router.get('/list',getMoviesList);

module.exports = router;
