/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'

import {Link} from 'react-router-dom'
import { useForm } from '../../hooks/userForm';
import { googleStart, startLoginEmailPassword } from '../../actions/auth'
import { useSelector } from 'react-redux';

export const LoginScreen = () => {
    
    const [formValues, handleInputChange ] = useForm({
        email:"agchavez@unah.hn",
        password:"test123"
    })
    
    const dispach = useDispatch();

    const {email, password} = formValues;
    const {loading} =  useSelector(state =>state.ui)
    const handleLogin = (e)=>{
        e.preventDefault();
        dispach(startLoginEmailPassword( email , password));
    }

    const handleGoogle = ()=>{
        dispach(googleStart())
    }
    return (
        <>
            <h3 className ="auth__titlle">Login</h3>
            <form action="" onSubmit= {handleLogin}>
                <input
                    autoComplete = "off"
                    className = "auth__input" 
                    type="text" 
                    placeholder = "email"
                    name = "email"
                    value = {email}
                    onChange= {handleInputChange}
                />

                <input
                    autoComplete = "off"
                    className = "auth__input" 
                    type= "password" 
                    placeholder = "password"
                    name = "password"
                    value = {password}
                    onChange = {handleInputChange}
                />
                <button 
                    className = "btn btn-primary btn-block"
                    type="submit"
                    disabled = {loading}
                >
                    Login
                </button>
                <hr />

                <div className = "auth__social-networks">
                    <p>Login with social networks</p>
                    <div 
                        className="google-btn"
                        onClick= {handleGoogle}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link 
                    className = "link"
                    to = "/auth/register"
                >
                        Create new Account
                </Link>

            </form>
        </>
    )
}
