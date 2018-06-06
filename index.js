var _ = require('lodash');
var movieData = require('./movies.json')

// movies bf 1990 with imdbRating > 8.7
var popularOldies = _.filter(movieData, (movie) => movie.year < 1990 && movie.imdbRating > 8.7)
var popularOldiesTitles = popularOldies.map((movie) => movie.originalTitle)
// var po2 = _.map(popularOldies, 'originalTitle')
// console.log(popularOldies)
// console.log(popularOldiesTitles)
// better than looping as the code become complex

// * do any movies star John Travolta in 1994
var travoltaMovies = _.filter(movieData, (movie) => {
    return _.find(movie.actors, (actor) => actor === 'John Travolta')
})
//  && movie.year === 1994) 
// > get all actors
var allActors = _.map(movieData, 'actors')
// > filter any duplicates
var uniqActors = _.union(...allActors)

// var allActors = _.chain(movieData) // when you want to chain actions
//                     .map(movieData, 'actors')
//                     .union(...allActors)
//                     .value();

// * Get me list of distinct actors
var abc = 123 // so it stops at the very bottom of the file when debugging