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

  const combinedResults = [ ...movies[0], ...movies[1] ]

  combinedResults.forEach((movie) => {
    movie.year = parseInt(movie.releaseDate) // gives you year
  })

  var sort = _.orderBy(combinedResults, ['year', 'title']) // orderby year then title

  sort.forEach((movie) => {
    console.log(`${movie.title}, ${movie.year}`)
  })

  return {
    type: 'GET_MOVIES_SUCCESS',
    movies: combinedResults
  }
}
