import axios from 'axios'

export default axios.create({
  baseURL: 'http://fake-hotel-api.herokuapp.com/api'
})