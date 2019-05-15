import React from 'react'
import PropTypes from 'prop-types'

import '../css/review.css'


const Review = ({review}) => {
  return (
    <div className="review">
      <div className={`eval ${review.positive && 'plus'}`}>
        {review.positive ? '+' : '-'}
      </div>
      <div className="user">
        <div className="name">{review.name}</div>
        <div className="comment">{review.comment}</div>
      </div>
    </div>
  )
  
}

Review.propTypes = {
  hotel: PropTypes.object
}

export default Review