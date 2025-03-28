import React from 'react'
import {Link} from 'react-router-dom'

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
          <NavLink to="/about">About</Link>
          <NavLink to="/animals">Animals</Link>
          <NavLink to="/foster-parent">Foster Parents</Link>
        </nav>
      </header>
    )
}
