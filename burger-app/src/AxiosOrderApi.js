import axios from 'axios'

const instance =axios.create({
    baseURL:"https://react-burger-18cfa-default-rtdb.firebaseio.com/"
})

export default instance;