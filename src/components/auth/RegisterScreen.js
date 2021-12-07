import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/userForm'

import Validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { removeError, setError } from '../../actions/ui'
import { startRegisterWithEmailPassword } from '../../actions/auth'

export const RegisterScreen = () => {

    const [formValues, handleInputChange] = useForm(
        {
            email: "agchavez@unah.hn", 
            password: "test123", 
            name: 'Gabriel', 
            passwordConfirm: "test123"
        }
    )
    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui)
    const { email, password, name, passwordConfirm } = formValues
    const handleSummit = (e)=>{
        e.preventDefault()
        if(isFormValid()){ 
            dispatch(startRegisterWithEmailPassword(email, password, name))
        }
        

    }

    const isFormValid = ()=>{
        if (name.trim().length === 0 ) {
            dispatch(setError("nombre no valido"))
            return false
        }
        else if (!Validator.isEmail(email)) {
            dispatch(setError("Correo no valido"));
            return false
        }
        else if (password !== passwordConfirm || password.length < 5 ){
            dispatch(setError("Contraseñas no validas"));
            return false
        }
        dispatch(removeError())
        return true;

    }
    return (
        <>
             <h3 className ="auth__titlle">Register</h3>
            <form action="" onSubmit= {handleSummit}>
                
                   { msgError? <div className ="auth__alert-error">{msgError}</div> : ''}

                
                <input
                    autoComplete = "off"
                    className = "auth__input" 
                    type="text" 
                    placeholder = "email"
                    name = "email"
                    value= {email}
                    onChange = {handleInputChange}
                />
                <input
                    autoComplete = "off"
                    className = "auth__input" 
                    type= "text" 
                    placeholder = "name"
                    name = "name"
                    value = {name}
                    onChange = {handleInputChange}
                />

                <input
                    autoComplete = "off"
                    type= "password"
                    className = "auth__input" 
                    placeholder = "password"
                    name = "password"
                    value={password}
                    onChange = {handleInputChange}
                />
                <input
                    autoComplete = "off"
                    className = "auth__input" 
                    type= "password" 
                    placeholder = "confirm password"
                    name = "passwordConfirm"
                    value = {passwordConfirm}
                    onChange = {handleInputChange}
                />
                
                <button 
                    className = "btn btn-primary btn-block"
                    type="submit"
                >
                    Register Account
                </button>
                <div className = "auth__link">
                   <Link 
                    className = "link"
                    to = "/auth/login"
                >
                        Login
                </Link> 
                </div>
                

            </form>
        </>
    )
}
