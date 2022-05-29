import axios from 'axios'

const instance=axios.create({
    baseURL:'https://react-course-e6c5a-default-rtdb.firebaseio.com',
    timeout:5000
})

instance.interceptors.request.use(function(config){
    return(config)
},function(err){
    return Promise.reject(err)
})

instance.interceptors.response.use(function(response){
    return response
},function(error){
    return Promise.reject(error)
})

export default instance
