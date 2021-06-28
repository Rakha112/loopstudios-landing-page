import React from 'react'
import bgHomeM from '../images/mobile/image-hero.jpg'
import bgHomeD from '../images/desktop/image-hero.jpg'
const ComingSoon = () => {
    return (
        <div className="coming_soon">
            <div className="home">
            <div className="overlay">
            <h1>
                coming soon
            </h1>
            </div>
            <img className="bgHeroM" src={bgHomeM} alt="" />
            <img className="bgHeroD" src={bgHomeD} alt="" />
        </div>
        </div>
    )
}

export default ComingSoon
