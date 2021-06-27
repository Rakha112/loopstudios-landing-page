import React from 'react'

import bgHome from '../images/mobile/image-hero.jpg'
const Home = () => {
    return (
        <div className="home">
            <div className="overlay">
            <h1>
                immersive experiences that deliver
            </h1>
            </div>
            <img className="bgHero" src={bgHome} alt="" />
        </div>
    )
}

export default Home
