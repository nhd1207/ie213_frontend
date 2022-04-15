import axios from '../requestV2'

const prefix = '/user';

export const getMe =()=> {
    return axios({
        method: 'GET',
        url: `${prefix}/getMe`
    })
}

export const getAllUser =()=> {
    return axios({
        method: 'GET',
        url: `${prefix}/getAllUser`
    })
}

export const getuser =()=> {
    return axios({
        method: 'GET',
        url: `${prefix}/getuser`
    })
}   

export const getInfo =()=> {
    return axios({
        method: 'GET',
        url: `${prefix}/getInfo`
    })
}   

export const updateInfo =(data)=> {
    return axios({
        method: 'PATCH',
        data,
        url: `${prefix}/updateInfo`
    })
}   

export const getCart =()=> {
    return axios({
        method: 'GET',
        url: `${prefix}/getCart`
    })
}   

export const updateCart =(data)=> {
    return axios({
        method: 'PATCH',
        data,
        url: `${prefix}/updateCart`
    })
}

export const updateWishlist =(data)=> {
    return axios({
        method: 'PATCH',
        data,
        url: `${prefix}/updateWishlist`
    })
}

