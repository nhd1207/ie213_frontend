import axios, { CancelToken } from 'axios';
import Cookies from 'js-cookie';
import { CANCEL } from 'redux-saga'
import { link_api } from './webConfig'

const instance = axios.create({
  baseURL: link_api,
  timeout: 50000,
  transformRequest: [(data) => JSON.stringify(data)],
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  validateStatus: (status) => {
    return true;
  },
});
instance.interceptors.request.use(function (config) {
  const token = Cookies.get('jwt')
  if(token){
    config.headers.common['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
  // return Promise.resolve(error)
});
instance.interceptors.response.use(
  response => {
      return response
  },
  error => {
      if (!error.response) {
          return {
            data: {
              status: 0,
              message: "Please check your internet connection."
            }
          }
      }
      return Promise.reject(error)
  }
)

// remove field null
const clean =(obj)=> {
  if(!obj){
    return obj
  }
  let data = { ...obj }
  for (var propName in data) { 
    if (data[propName] === null || data[propName] === undefined) {
      delete data[propName];
    }
  }
  return JSON.stringify(data) === '{}' ? null : data
}
export default (options)=> {
  const data = clean(options.data);
  const params = clean(options.params);
  const source = CancelToken.source();
  const promise = new Promise((resolve, reject) => {
    instance({
      ...options,
      data,
      params,
			cancelToken: source.token
    })
      .then(response => resolve(response.data))
      .catch(error => {
        // reject(error)
        throw error
      })
  })
  promise[CANCEL] = () => source.cancel();
  return promise
}
export const multipart = (url, form_data)=> {
  const source = CancelToken.source();
  const promise = new Promise((resolve, reject) => {
    instance.post(url, form_data, { headers: {
        'Content-Type': 'multipart/form-data'
      }})
      .then(response => resolve(response.data))
      .catch(error => {
        throw error
      })
  })
  promise[CANCEL] = () => source.cancel();
  return promise
}