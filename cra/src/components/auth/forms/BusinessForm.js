import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useLocation, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { handleLoginBusiness, handleRegisterBusiness } from '../../../actions'
//imported redux stuff for redux hooks ^

//Extract axios calls into actions and set up reducers for it

const BusinessForm = () => {
    const { pathname } = useLocation()
    const history = useHistory() // need to implement
    // const [pathname, setPathname] = useState('/registe') // remove once connected to routes
    const { register, handleSubmit, errors, reset } = useForm();
    // Adding redux hooks stuff:
    const dispatch = useDispatch()


    const handleRegister = data => {
        // if(data.password === data.password_verify) {
        //     delete data.password_verify
        //     axios.post('https://food-bw-practice-backend.herokuapp.com/api/auth/business-owner/register', data)
        //         .then(res => {
        //             console.log(res.data)
        //             reset()
        //         })
        //         .then(() => history.push('/protectedBusiness'))
        //         .catch(err => {
        //             console.log(err)
        //         })
        // }
        dispatch(handleRegisterBusiness(data, history, reset))
    };

    const handleLogin = data => {
        // axios.post('https://food-bw-practice-backend.herokuapp.com/api/auth/business-owner/login', data)
        // .then(res => {
        //     console.log(res.data)
        //     reset()
        // })
        // .then(() => history.push('/protectedBusiness'))
        // .catch(err => {
        //     console.log(err)
        // })
        dispatch(handleLoginBusiness(data, history, reset))
    }
    
    
    return (
        <>
      <form onSubmit={pathname.includes('/register') ? handleSubmit(handleRegister) : handleSubmit(handleLogin)}>
        <input type="text" placeholder="Username" name="username" ref={register({required: true, maxLength: 80})} />
        <input type="password" placeholder="Password" name="password" ref={register({required: true, minLength: 4})} />
        {
        pathname.includes('register') &&
        <>
            <input type="password" placeholder="Re-enter Password" name="password_verify" ref={register({required: true, minLength: 4})} />
            <input type="text" placeholder="Email" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
            <input type="text" placeholder="First name" name="first_name" ref={register({required: false, maxLength: 80})} />
            <input type="text" placeholder="Last name" name="last_name" ref={register({required: false, maxLength: 100})} />

            <input type="text" placeholder="Business Name" name="business_name" ref={register({required: true, maxLength: 80})} />
        </>
        }
        <input type="submit" />
      </form>
      </>
    )
}

export default BusinessForm