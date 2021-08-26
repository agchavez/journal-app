import React from 'react'
import { NoteScreen } from '../notes/NoteScreen'
import { NothingSelected } from './NothingSelected'
import { Sidebar } from './sidebar'

export const JournalScreen = () => {
    
    return (
        <div className = "journal__main-contex">
            <Sidebar />  
                <main>
                    {/* <NothingSelected/> */}
                    <NoteScreen/>
                </main>
        </div>
    )
}
