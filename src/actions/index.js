import hotelAPI from '../apis/hotelApi'
import { NEW_HOTELS, SET_MSG, SET_MSG_H, GET_REVIEWS } from './types'

//use redux-thunk & axios to return function returning dispatch manually
export const getHotels = () => async dispatch => {
  let errorMsg

    try { 
      const hotels = await hotelAPI.get('/hotels?count=5')

      errorMsg = ""
      dispatch({
        type: NEW_HOTELS,
        payload: hotels.data
      })
    } catch(e) {
      errorMsg = "Hotels not found. Please try again."
    }

  dispatch({
    type: SET_MSG,
    payload: errorMsg
  })
}

export const getReviews = (id) => async dispatch => {
  let errorMsgReviews

  try { 
    const reviews = await hotelAPI.get(`/reviews?hotel_id=${id}`)

    errorMsgReviews = ""
    dispatch({
      type: GET_REVIEWS,
      payload: reviews.data
    })
  } catch(e) {
    errorMsgReviews = "There was a problem loading the reviews. Please try again."
  }

  dispatch({
    type: SET_MSG_H,
    payload: errorMsgReviews
  })
}