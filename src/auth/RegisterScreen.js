import React from 'react'
import { Link } from 'react-router-dom'
export const RegisterScreen = () => {
    return (
        <>
             <h3 className ="auth__titlle">Register</h3>
            <form action="">
                <input
                    autoComplete = "off"
                    className = "auth__input" 
                    type="text" 
                    placeholder = "email"
                    name = "email"
                />
                <input
                    autoComplete = "off"
                    className = "auth__input" 
                    type= "text" 
                    placeholder = "name"
                    name = "name"
                />

                <input
                    autoComplete = "off"
                    className = "auth__input" 
                    type= "password" 
                    placeholder = "password"
                    name = "password"
                />
                <input
                    autoComplete = "off"
                    className = "auth__input" 
                    type= "password" 
                    placeholder = "confirm password"
                    name = "password"
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
