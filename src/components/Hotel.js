import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Review from './Review'
import { getReviews } from '../actions'
import '../css/hotel.css'


class Hotel extends Component {

  state = {
    reviewsShown: false
  }

  handleClick(hotelId) {
    if (!this.state.reviewsShown){
      //if reviews not shown, get reviews and show section
      this.props.getReviews(hotelId)
      this.setState({reviewsShown: true})
    } else {
      //if reviews shown, hide section & clear comments in app state
      this.setState({reviewsShown: false})
    }
  }

  printRating = (stars) => {
    let stArray = []
    for (let i = 0; i < stars; i++) {
      stArray.push(<span className="star" key={i}>&#9733;</span>)
    }
    return stArray
  }

  formatDate = (string) => {
    let date
    if (string) {
      date = string.split('T')[0].split('-').reverse().join('.')
    }
    return date
  }

  render() {
    let imageStyle = {
      backgroundImage: 'url(' + this.props.hotel.images[0] + ')'
    }
    const hotel = this.props.hotel

    return (
      <div className="hotel" key={hotel.id}>
        <div className="info">
        
          <div className="img" style={imageStyle}>
          </div>
          <div className="stats">
            <div className="top">
              <div className="title">
                <h3>{hotel.name}</h3>
                <div className="location">
                  {hotel.city} - {hotel.country}
                </div>
              </div>
              <div className="rating">
                <div className="base">
                  <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                </div>
                <div className="proportion">
                  {this.printRating(hotel.stars)}
                </div>
              </div>
            </div>
            
            <p className="description">
              {hotel.description}
            </p>

            <div className="bottom">
              <button onClick={() => this.handleClick(this.props.hotel.id)}>
              {this.state.reviewsShown ? 'Hide Reviews' : 'Show Reviews'}
              </button>
              <div className="conditions">
                <div className="price">
                  {hotel.price} €
                </div>
                <div className="dates">
                {this.formatDate(hotel.date_start)} - {this.formatDate(hotel.date_end)}
                </div>
              </div>
            </div>

          </div>
        
        </div>
        
        <div className="fold">
          <div className={this.state.reviewsShown ? 'reviews' : 'reviews hidden'}>
              {this.props.reviews && this.props.reviews[this.props.hotel.id] ? 
                this.props.reviews[this.props.hotel.id].map(review => {
                  return <Review review={review} key={review.name + review.hotel_id}/>
                })
                : this.props.error
              }
          </div>
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {reviews: state.reviews, error: state.errorMsgReviews}
}

Hotel.propTypes = {
  hotel: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { getReviews })(Hotel)
