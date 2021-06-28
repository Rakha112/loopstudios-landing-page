import React from 'react'
import logo from '../images/logo.svg'
import navList from './data/dataNavList'
import fb from '../images/icon-facebook.svg'
import tw from '../images/icon-twitter.svg'
import ig from '../images/icon-instagram.svg'
import pin from '../images/icon-pinterest.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_M">
                <img src={logo} alt="" />
                {
                    navList.map((data) => {
                        return (
                            <div className="nav_foot" key={data.id}>
                                <Link to={data.link}><a href="#">{data.p}</a></Link>
                                
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
            <div className="footer_D">
                <div className="foot_atas">
                    <Link to='/loopstudios-landing-page'>
                    <img src={logo} alt="" />
                    </Link>
                    
                    <div className="sosmed">
                        <img src={fb} alt="" />
                        <img src={tw} alt="" />
                        <img src={pin} alt="" />
                        <img src={ig} alt="" />
                    </div>
                </div>
                <div className="foot_bawah">
                    <div className="nav_foot">
                        {
                            navList.map((data) => {
                                return (
                                    <div className="foot_a" key={data.id}>
                                        <Link to={data.link}>
                                        <a href="#">{data.p}</a>
                                        </Link>
                                        
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                    
                    <p>© 2021 Loopstudios. All rights reserved.</p>
                </div>
                
            </div>
            
        </div>
        
        
    )
}

export default Footer
