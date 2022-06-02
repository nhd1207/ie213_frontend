import axios from '../requestV2'

const prefix = '/user';

export const getMe =()=> {
    return axios({
        method: 'GET',
        url: `${prefix}/getMe`
    })
}

export const getList =()=> {
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

export const addItemToCart =(data)=> {
    return axios({
        method: 'PATCH',
        data,
        url: `${prefix}/addItemToCart`
    })
}

export const updateWishlist =(data)=> {
    return axios({
        method: 'PATCH',
        data,
        url: `${prefix}/updateWishlist`
    })
}

export const addItemToWishlist =(data)=> {
    return axios({
        method: 'PATCH',
        data,
        url: `${prefix}/addItemToWishlist`
    })
}

export const adminData =(data)=> {
    return axios({
        method: 'GET',
        url: `${prefix}/admindata`
    })
}

export const adminDataOrderCount =(data)=> {
    return axios({
        method: 'GET',
        url: `${prefix}/adminData/countOrder`
    })
}

export const adminDataBillCount =(data)=> {
    return axios({
        method: 'GET',
        url: `${prefix}/admindata/countBill`
    })
}

export const getListPost =()=> {
    return axios({
        method: 'GET',
        url: `post/`
    })
}