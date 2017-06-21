import React from 'react'
import { connect } from 'react-redux'

export function MoviesContainer(props) {
  let movies = props.movies.map((movie) => {
    return (
      <div key={movie.title} className="movie">
        <div className="image">
          <img src={movie.image} />
        </div>
        <div className="text">
          <h3 className="title">{movie.title}</h3>
          <p className="price">Price: ${movie.price}</p>
          <p className="year">Year: {movie.releaseYear}</p>
        </div>
      </div>
    )
  })

  return (
    <div className="container">
      <div className="movies">
        {movies}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(MoviesContainer)
