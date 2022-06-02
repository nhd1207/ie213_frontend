import axios from '../requestV2'

const prefix = '/carOrder';

// export const getDetailByCode =(code)=> {
//     return axios({
//         method: 'GET',
//         url: `${prefix}/${code}`
//     })
// }

export const getList =()=> {
    return axios({
        method: 'GET',
        url: `${prefix}/`
    })
}

export const getListAdmin =()=> {
    return axios({
        method: 'GET',
        url: `${prefix}/all`
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
        method: 'PATCH',
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


export const cancel =(id)=> {
    return axios({
        method: 'PATCH',
        url: `${prefix}/cancel/${id}`
    })
}