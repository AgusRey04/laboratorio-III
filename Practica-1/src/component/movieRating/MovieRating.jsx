import React from 'react'

function MovieRating({rating, title}) {
  return (
    <div>
      <h5>{title }</h5>
      <div>{rating}</div>
    </div>
  )
}

export default MovieRating
