import * as types from '../types'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export const handleRegisterBusiness = (data, history,reset) => dispatch =>{

    if(data.password === data.password_verify) {
        delete data.password_verify
        axiosWithAuth()
        .post('/auth/business-owner/register', data)
            .then(res => {
                console.log(res.data)
                reset()
                //Dispatch here ?
                dispatch({type: types.REGISTER_SUCCESS})
            })
            .then(() => history.push('/protectedBusiness'))
            .catch(err => {
                console.log(err)
                dispatch({type: types.REGISTER_FAIL})
            })
    }

}

export const handleLoginBusiness = (data, history, reset) => dispatch =>{
    axiosWithAuth
    .post('/auth/business-owner/login', data)
    .then(res => {
        console.log(res.data)
        reset()
        dispatch({type: types.LOGIN_SUCCESS})
    })
    .then(() => history.push('/protectedBusiness'))
    .catch(err => {
        console.log(err)
        dispatch({type: types.LOGIN_FAIL})
    })

}


