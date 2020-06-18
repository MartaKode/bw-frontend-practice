import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useLocation, useHistory } from 'react-router-dom'

const CustomerForm = () => {
    const { pathname } = useLocation()
    const history = useHistory()
    // const [pathname, setPathname] = useState('/registe') // remove once connected to routes
    const { register, handleSubmit, errors, reset } = useForm();
    console.log(handleSubmit)
    const handleRegister = data => {
        console.log(data)
        if(data.password === data.password_verify) {
            delete data.password_verify
            axios.post('https://food-bw-practice-backend.herokuapp.com/api/auth/customers/register', data)
                .then(res => {
                    console.log(res.data)
                    reset()
                })
                .then(() => history.push('/protectedClient'))
                .catch(err => {
                    console.log(err)
                })
        }
    };

    const handleLogin = data => {
        console.log(data)
        axios.post('https://food-bw-practice-backend.herokuapp.com/api/auth/customers/login', data)
        .then(res => {
            console.log(res.data)
            reset()
        })
        .then(() => history.push('/protectedClient'))
        .catch(err => {
            console.log(err)
        })
    }
    
    
    return (
        <>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input type="text" placeholder="Username" name="username" ref={register({required: true, maxLength: 80})} />
        <input type="password" placeholder="Password" name="password" ref={register({required: true, minLength: 4})} />
        {
        pathname.includes('register') &&
        <>
            <input type="password" placeholder="Re-enter Password" name="password_verify" ref={register({required: true, minLength: 4})} />
            <input type="text" placeholder="Email" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
            <input type="text" placeholder="First name" name="first_name" ref={register({required: false, maxLength: 80})} />
            <input type="text" placeholder="Last name" name="last_name" ref={register({required: false, maxLength: 100})} />
        </>
        }
        <input onClick={pathname.includes('register') ? handleSubmit(handleRegister) : handleSubmit(handleLogin)} type="submit" />
      </form>
      </>
    )
}

export default CustomerForm