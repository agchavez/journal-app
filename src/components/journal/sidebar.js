import React from 'react'
import { JournalEntries } from './JournalEntries'
import {useDispatch, useSelector} from 'react-redux'
import { startLogout } from '../../actions/auth';

export const Sidebar = () => {
    const dispatch = useDispatch();
    const {name} = useSelector(state => state.auth)
    const handleLogout = ()=>{
        dispatch(startLogout())
    }
    const handleNewEnty = ()=>{
        
    }
    return (
        <aside className = "journarl__sidebar">
            <div className ="journal__sidebar-navbar mt-1">
                <div>
                <i className = "far fa-moon"></i>
                <span>{name}</span>

                </div>
            <button className="btn" onClick= {handleLogout}>
                Logout
            </button>
            </div>

            <div 
                className ="jornual__new-entry"
                onClick ={handleNewEnty}
                >
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">New enty</p>

            </div>
            <JournalEntries />
        </aside>
    )
}
