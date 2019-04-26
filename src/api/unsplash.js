import axios from 'axios';
const APIKEY = "2013669ed45955988d6c8f4a1178b705d880232093740813f96aa010d06cb757"

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${APIKEY}`
  }
})
