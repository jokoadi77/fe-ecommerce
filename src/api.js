import axios from 'axios'

const CustomApi = axios.create({
    baseURL: '/api/v1',
  });

  export default CustomApi