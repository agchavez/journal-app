import React from 'react'

export const JournarlEntry = () => {
    return (
        <div className ="journal__entry pointer">
            <div className="journal__entry-picture"
            style = {{
                backgroundSize:'cover',
                backgroundImage:'url(https://pbs.twimg.com/profile_images/1089403287227510784/6ywXy73f.jpg)'
            }}>
            </div>
                <div className = "journal__entry-body">
                    <p className = "journal__entry-tittle">
                        Un nuevo dia 
                    </p>
                    <p className = "journal__entry-context">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. s.
                    </p>
                </div>

                <div className="journal__entry-date-box">
                    <span>
                        Monday
                    </span>
                    <h2>28</h2>
                     
                </div>
                

            </div>
            
    )
}
