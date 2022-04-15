import axios from '../requestV2'

const prefix = '/accessory-bill';

export const getDetailByCode =(code)=> {
    return axios({
        method: 'GET',
        url: `${prefix}/${code}`
    })
}
export const getList =()=> {
    return axios({
        method: 'GET',
        url: `${prefix}/`
    })
}

export const getListAdmin =()=> { //grt all bill for admin
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



