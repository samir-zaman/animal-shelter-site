import React, {useState} from 'react'
import {NavLink, Link} from 'react-router-dom'

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#510116",
    }

    function toggleMenu() {
        setIsMenuOpen(prev => !prev)
    }

    return (
        <header>
        <Link className="site-logo" to="/">Furry Futures</Link>

        <button className="mobile-menu-toggle" onClick={toggleMenu}>
                ☰
        </button>

        <nav className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
            <NavLink 
                to="/about"
                style={({isActive}) => isActive ? activeStyle : null}
            >
                About
            </NavLink>
            <NavLink 
                to="/animals"
                style={({isActive}) => isActive ? activeStyle : null}
            >
                Animals
            </NavLink>
            <NavLink 
                to="/foster-parent"
                style={({isActive}) => isActive ? activeStyle : null}
            >
                Foster Parents
            </NavLink>
            <NavLink
                to="/donate"
                className="fancy-button"
            >
                Donate
            </NavLink>
        </nav>
      </header>
    )
}
