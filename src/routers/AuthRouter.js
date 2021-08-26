import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { LoginScreen } from '../auth/LoginScreen';
import { RegisterScreen } from '../auth/RegisterScreen';
export const AuthRouter = () => {
    return (
        <div className = "auth__main">
            <div className ="auth__box-container">
                <Switch>
                    <Route 
                        path ="/auth/login" 
                        component = {LoginScreen} 
                    />
                    <Route 
                        path ="/auth/register" 
                        component = {RegisterScreen} 
                    />
                    <Redirect to ="/auth/register"></Redirect>
                </Switch>
            </div>
            
        </div>
    )
}