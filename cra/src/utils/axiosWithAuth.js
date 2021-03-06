import axios from "axios";

export const axiosWithAuth = () => {
  //get the token from localStorage
const token = window.localStorage.getItem('token')
  //create a new 'instance' of axios with the config object built into it
  return axios.create({
    headers: {
      authorization: token
    },
    baseURL: 'https://food-bw-practice-backend.herokuapp.com/api'
  })
}