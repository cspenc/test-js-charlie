import React from 'react'
import { connect } from 'react-redux'

export function MoviesContainer(props) {
  let movies = props.movies.map((movie) => {
    return (
      <div>{movie.title} - {movie.releaseYear}</div>
    )
  })

  return (
    <div>
      {movies}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(MoviesContainer)
