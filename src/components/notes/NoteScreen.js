import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {
    return (
        <div className="note__main-content">
            <NoteAppBar/>

            <div className ="notes__content">
                <input 
                    type="text" 
                    placeholder ="Some aweson tittle"
                    className ="notes__tittle-input"
                    autoComplete ="off"
                />

                <textarea 
                    name="" 
                    placeholder="What happend today"
                    className ="notes__texttarea"
                    >
                </textarea>

                <div className ="notes__image">
                    <img 
                        src="https://ichef.bbci.co.uk/news/640/cpsprodpb/38A0/production/_97169441_gettyimages-491514160.jpg" 
                        alt="img" 
                    />

                </div>

            </div>
            
        </div>
    )
}
