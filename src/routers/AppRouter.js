import { getAuth } from '@firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom"
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRouter';
import { PublicRoute } from './PublicRouter';



export const AppRouter = () => {
    //Caragr el usuario al inicar la app en el caso que este registrado 
    const dispatch = useDispatch();

    //Para cargar 
    const [check, setcheck] = useState(true);

    //Para proteccion de rutas
    const [isAuth, setisAuth] = useState(false);


    useEffect(()=>{
        getAuth().onAuthStateChanged((user)=>{
            if (user?.uid) {
                setisAuth(true)
            }else{
                setisAuth(false)
            }
            setcheck(false)

        })
    }, [dispatch, setcheck, setisAuth])
    if (check) {
        return(
            <h1>Caragndo...</h1>
        )
    }
    return (
        <div>
            <Router>
                <Switch>
                    <PublicRoute  
                        path="/auth" 
                        component = {AuthRouter}
                        isAuthenticaded = {isAuth}
                        > 
                    </PublicRoute>
                    <PrivateRoute 
                        exact path="/" 
                        isAuthenticaded = {isAuth} 
                        component = {JournalScreen}>
                    </PrivateRoute>
                </Switch>

            </Router>
            
        </div>
    )
}
