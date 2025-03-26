import React from 'react'
import ReactDom from 'react-dom/client'
import {Link} from 'react-router-dom'

export default function Header(){
    return (
        <header>
        <Link className="site-logo" to="/">Furry Futures</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/animals">Animals</Link>
          <Link to="/foster-parent">Foster Parents</Link>
        </nav>
      </header>
    )
}
