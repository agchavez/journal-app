import { useSelector } from "react-redux"


export const startNewNote = ()=>{
    return (dispach, getState)=>{
        const {uid} = getState().auth;
        const newNote = {
            title: '',
            body
        }
    }
}