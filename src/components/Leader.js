import React from 'react'
import leader from '../images/mobile/image-interactive.jpg'

const Leader = () => {
    return (
        <div className="leader">
            <img src={leader} alt="" />
            <div className="isi_leader">
                <h2>the leader in interactive vr</h2>
                <p>Founded in 2011, Loopstudios has been producing world-class virtual reality 
                    projects for some of the best companies around the globe. Our award-winning 
                    creations have transformed businesses through digital experiences that bind 
                    to their brand.</p>
            </div>
            
        </div>
    )
}

export default Leader
