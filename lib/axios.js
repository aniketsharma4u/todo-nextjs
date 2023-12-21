import Axios from "axios"

const axios = Axios.create({
   baseURL: process.env.BASEURL,
   headers: {
      'X-Requsted-With': 'XMLHttpRequest'
   },
   withCredentials: true
})

export default axios;
