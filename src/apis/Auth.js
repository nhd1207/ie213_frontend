import axios from '../requestV2'

const prefix = '/user';

export const login =(data)=> {
    return axios({
        method: 'POST',
        data,
        url: `${prefix}/logIn`
    })
}

export const signup =(data)=> {
    return axios({
        method: 'POST',
        data,
        url: `${prefix}/signUp`
    })
}

export const logout =()=> {
    return axios({
        method: 'GET',
        url: `${prefix}/logOut`
    })
}

export const updatePassword =(data)=> {
    return axios({
        method: 'POST',
        data,
        url: `${prefix}/updatePassword`
    })
}

export const toggleUser =(id)=> { // tắt hoạt động user
    return axios({
        method: 'PATCH',
        url: `${prefix}/toggleUser/${id}`
    })
}


export const verify =(params)=> {
    return axios({
        method: 'GET',
        params,
        url: `/user`
    })
}

export const verifyAdmin =(params)=> {
    return axios({
        method: 'GET',
        params,
        url: `user/getMe`
    })
}
// export const getDetailByCode =(booking_code)=> {
//     return axios({
//         method: 'GET',
//         params: {
//             booking_code
//         },
//         url: `${prefix}/detail`
//     })
// }

// export const update =(id, data)=> {
//     return axios({
//         method: 'PUT',
//         data,
//         url: `${prefix}/${id}`
//     })
// }

// export const destroy =(id)=> {
//     return axios({
//         method: 'POST',
//         url: `${prefix}/${id}/delete`
//     })
// }

// export const getWeb =(id)=> {
//     return axios({
//         method: 'GET',
//         params: {
//             id
//         },
//         url: `${prefix}/get-web`
//     })
// }

// export const pushWeb =(booking_id)=> {
//     return axios({
//         method: 'POST',
//         data: {
//             booking_id
//         },
//         url: `${prefix}/push-web`
//     })
// }