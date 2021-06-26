import React from 'react'
import logo from '../images/logo.svg'
import navList from './data/dataNavList'
import fb from '../images/icon-facebook.svg'
import tw from '../images/icon-twitter.svg'
import ig from '../images/icon-instagram.svg'
import pin from '../images/icon-pinterest.svg'
const Footer = () => {
    return (
        <div className="footer">
            <img src={logo} alt="" />
            {
                navList.map((data) => {
                    return (
                        <div className="nav_foot" key={data.id}>
                            <a href="#">{data.p}</a>
                        </div>
                    )
                })
            }
            <div className="sosmed">
                <img src={fb} alt="" />
                <img src={tw} alt="" />
                <img src={pin} alt="" />
                <img src={ig} alt="" />
            </div>
            <p>© 2021 Loopstudios. All rights reserved.</p>
        </div>
    )
}

export default Footer
