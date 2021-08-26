import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    return (
        <aside className = "journarl__sidebar">
            <div className ="journal__sidebar-navbar mt-1">
                <div>
                <i className = "far fa-moon"></i>
                <span>Angel Chavez</span>

                </div>
            <button className="btn">
                btn

            </button>
            </div>

            <div className ="jornual__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">New enty</p>

            </div>
            <JournalEntries />
        </aside>
    )
}
