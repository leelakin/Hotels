import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Hotel from './Hotel'

class HotelsList extends Component {

  render() {
    return (
      <React.Fragment>
        {
          this.props.hotels.map(hotel => {
            return <div key={hotel.id}>
              <Hotel hotel={hotel} />
            </div>
          })
        }
      </React.Fragment>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {hotels: state.hotels}
}

HotelsList.propTypes = {
  hotels: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(HotelsList)
