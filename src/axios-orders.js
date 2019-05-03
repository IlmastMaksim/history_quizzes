import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f80dc.firebaseio.com/'
});

export default instance;