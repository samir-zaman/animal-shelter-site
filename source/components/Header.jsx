import React from 'react'
import {NavLink, Link} from 'react-router-dom'

export default function Header(){
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "purple"
    }
    return (
        <header>
        <Link className="site-logo" to="/">Furry Futures</Link>
        <nav>
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
        </nav>
      </header>
    )
}
