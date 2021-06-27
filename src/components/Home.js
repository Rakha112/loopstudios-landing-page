import React from 'react'

import bgHomeM from '../images/mobile/image-hero.jpg'
import bgHomeD from '../images/desktop/image-hero.jpg'
const Home = () => {
    return (
        <div className="home">
            <div className="overlay">
            <h1>
                immersive experiences that deliver
            </h1>
            </div>
            <img className="bgHeroM" src={bgHomeM} alt="" />
            <img className="bgHeroD" src={bgHomeD} alt="" />
        </div>
    )
}

export default Home
