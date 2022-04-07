import axios from '../requestV2'

const prefix = '/accessory';

export const getDetailByCode =(code)=> {
    return axios({
        method: 'GET',
        params: {
            code
        },
        url: `${prefix}/detail`
    })
}

export const getList =()=> {
    return axios({
        method: 'GET',
        url: `${prefix}/`
    })
}

export const create =(data)=> {
    return axios({
        method: 'POST',
        data,
        url: `${prefix}/`
    })
}

export const update =(id, data)=> {
    return axios({
        method: 'PUT',
        data,
        url: `${prefix}/${id}`
    })
}

export const destroy =(id)=> {
    return axios({
        method: 'DELETE',
        url: `${prefix}/${id}`
    })
}



