import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getHotels } from '../actions'
import HotelsList from './HotelsList'
import logo from './images/parrot1.png'
import header from './images/parrot2.png'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrap">
          <div className="shenanigans">
            <img className="logo" alt="Parrot" src={logo} />
            <img className="header" alt="HolidayParrots" src={header} />
          </div>
          <div className="content">
            <div>
              <button className="load" onClick={() => this.props.getHotels()}>Load Hotels</button>
            </div>
            <HotelsList />
            {this.props.errorMsg}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {hotels: state.hotels, errorMsg: state.errorMsg}
}

export default connect(mapStateToProps, { getHotels })(App)