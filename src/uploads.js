import axios from 'axios'
import { link_api } from './webConfig'
//const API_URL = "http://localhost:5000/api/v1/"

const cloudinaryUpload = (fileToUpload) => {
    return axios.post(link_api + '/uploads/cloudinary-upload', fileToUpload)
    .then(res => res.data)
    .catch(err => console.log(err))
}

export default cloudinaryUpload