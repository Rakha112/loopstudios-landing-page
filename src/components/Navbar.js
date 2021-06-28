import React, {useState} from 'react'
import logo from '../images/logo.svg'
import ham from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'
import navList from './data/dataNavList'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isKlik , setisKlik] = useState(false)

    return (
        <div className="navbar">
            <Link to='/loopstudios-landing-page'>
            <img className="logo" src={logo} alt="logo" />
            </Link>
            
            <ul className={isKlik ? "aktif" : ""} >
                { navList.map((list) => {
                        return (
                            
                            <li key={list.id}>
                                <Link to={list.link}>
                                    <a href="#" onClick={() => setisKlik(!isKlik)} >{list.p}</a>
                                </Link>
                            </li>

                        )
                    })
                }
            </ul>
            <img className={isKlik ? "close aktif" : "ham"} onClick={() => setisKlik(!isKlik)} src={isKlik ? close : ham} alt="menu" />
        </div>
    )
}

export default Navbar
