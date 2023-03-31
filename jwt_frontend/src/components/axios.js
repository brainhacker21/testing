import axios from 'axios';

  const token = localStorage.getItem('token');
  const baseApi= axios.create({
    baseURL: 'http://localhost:3500/api/',
     headers:{
    ...(token && {
      Authorization:`Bearer ${token}`
    }),
    "Content-Type" : 'Application/Json'
  }
})

export default baseApi