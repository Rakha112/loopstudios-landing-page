import React, {useState} from 'react'
import logo from '../images/logo.svg'
import ham from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'
import navList from './data/dataNavList'

const Navbar = () => {
    const [isKlik , setisKlik] = useState(false)
    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="logo" />
            <ul className={isKlik ? "aktif" : ""} >
                { navList.map((list) => {
                    console.log(list);
                        return (
                            <li key={list.id}><a href="#">{list.p}</a></li>
                        )
                    })
                }
            </ul>
            <img className="ham" onClick={() => setisKlik(!isKlik)} src={ham} alt="menu" />
            <img className="close" src={close} alt="close" />
        </div>
    )
}

export default Navbar
