import { 
            getAuth, 
            signInWithPopup,
            createUserWithEmailAndPassword, 
            updateProfile,
            signInWithEmailAndPassword,
            signOut

        } from 'firebase/auth';
import { googleAuth } from '../components/firebase/firebase-config';
import {types} from '../types/types';
import { finishLoading, startLoading } from './ui';
import Swal from 'sweetalert2'

export const startLoginEmailPassword  = (email, password)=>{
    
    return async (dispatch)=>{
        dispatch(startLoading())
        try {
            const auth = getAuth();
            const {user} = await signInWithEmailAndPassword(auth, email, password)
            if (user) {
                dispatch(finishLoading())
                dispatch(login(user.uid, user.displayName))
                return true
            }
            
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error al autenticar'
              })
        }
    }
}

export const  googleStart = ()=>{
    return (dispatch)=>{

        const auth = getAuth()
        signInWithPopup(auth, googleAuth)
                .then( ({user}) => {
                 dispatch(
                     login(user.uid, user.displayName)
                 )
                })
    }
}

export const startRegisterWithEmailPassword =  (email, password, name)=>{
    return async (dispatch)=>{
        dispatch(startLoading())
        try {
            const auth = getAuth();
            const {user} = await  createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(user, {displayName: name})
            dispatch(finishLoading())
            dispatch(
                login(user.uid, user.displayName)
                )
            
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error al autenticar'
              })
        }
        
    }
}

export const login = (uid, displayName)=>{
    console.log("displayName",displayName);

    return({
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
)
}

export const startLogout = ()=>{
    return async (dispatch)=>{
        const auth = getAuth();
        await signOut(auth)

        dispatch(logout())
    }
}

const logout = ()=>({
    type:types.logout
})