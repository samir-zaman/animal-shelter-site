import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

export default function FosterParentLayout() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "purple"
    }
    return(
        <>
            <nav className="portal-nav">
                <NavLink 
                    to="." //relative link, terminal syntax representing the "current" path, which we set to "foster-parent" for this file in index.jsx
                    end
                    style={({isActive}) => isActive ? activeStyle : null}
                >
                    Dashboard
                </NavLink>

                <NavLink 
                    to="adoptees" //relative link
                    style={({isActive}) => isActive ? activeStyle : null}
                >
                    Adoptees
                </NavLink>

            </nav>
            <Outlet/>
        </>
    )
}


