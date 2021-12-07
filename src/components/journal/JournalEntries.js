import React from 'react'
import { JournarlEntry } from './JournarlEntry'

export const JournalEntries = () => {
    const entis = [1,2,3,4,5,6]
    return (
        <div className = "journal__entis">
            {
                entis.map(value =>(
                    <JournarlEntry key={value}/>
                ))
            }
        </div>
    )
}
