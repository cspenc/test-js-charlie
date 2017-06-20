import moment from 'moment'
import movies from './movies'
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

  const mergedMovies = [ ...movies[0], ...movies[1] ];

  mergedMovies.forEach((movie) => {
    movie.releaseYear = parseInt(movie.releaseDate); // gives you year
  })

  var sorted = _.orderBy(mergedMovies, ['releaseYear', 'title']); // orderby year then title

  const combinedResults = sorted;

  return {
    type: 'GET_MOVIES_SUCCESS',
    movies: combinedResults
  }
}
