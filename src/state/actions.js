import moment from 'moment'
import movies from './movies'
// imported lodash for sorting and uniqueness
import _ from 'lodash';


export function getPopularMovies () {
  //
  // movies contains the results of two API requests
  //

  //
  // 1. combine the results of these requests
  // 2. sort the results FIRST by year THEN by title
  // 3. each movie object in the results needs a releaseYear attribute added
  //    this is used in src/components/movies-list.js line 25
  //

  // initiate empty array of combinedMovies
  var combinedMovies = [];

  // loop through each array of movie objects with forEach and add
  // the arrays to the combinedMovies array
  movies.forEach((arr) => {
    combinedMovies = [...combinedMovies, ...arr]
  })

  // loop through combinedMovies array to add a releaseYear attribute
  // to each movie object by taking the releaseDate and calling parseInt
  combinedMovies.forEach((movie) => {
    movie.releaseYear = parseInt(movie.releaseDate); // gives you year
  })

  // I then stor the combinedMovies using lodash by releaseYear and title
  var sorted = _.orderBy(combinedMovies, ['releaseYear', 'title']); // orderby year then title

  // finally, I take the sorted array and make sure each movie title is unique
  // using lodash's uniqueBy, finally setting combinedResults
  const combinedResults = _.uniqBy(sorted, (movie) => movie.title); // unique movie titles

  return {
    type: 'GET_MOVIES_SUCCESS',
    movies: combinedResults
  }
}
