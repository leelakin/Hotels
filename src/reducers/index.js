import { combineReducers } from 'redux'

import { NEW_HOTELS, SET_MSG, SET_MSG_H, GET_REVIEWS } from '../actions/types'

const errorMsgReducer = (state = "", action) => {
  if (action.type === SET_MSG) {
    return action.payload
  }
  return state
}

const hotelsReducer = (state = [], action) => {
  if (action.type === NEW_HOTELS) {
    return action.payload
  }
  return state
}

const reviewsReducer = (state = {}, action) => {
  if (action.type === GET_REVIEWS) {
     let reviews = {}
     reviews[action.payload[0].hotel_id] = action.payload
    return Object.assign({}, state, reviews)
  }
  return state
}

const errorMsgReviewsReducer = (state = "", action) => {
  if (action.type === SET_MSG_H) {
    return action.payload
  }
  return state
}

export default combineReducers({
  hotels: hotelsReducer,
  reviews: reviewsReducer,
  errorMsg: errorMsgReducer,
  errorMsgReviews: errorMsgReviewsReducer
})