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
            <nav>
                <NavLink 
                    to="/foster-parent"
                    end
                    style={({isActive}) => isActive ? activeStyle : null}
                >
                    Dashboard
                </NavLink>
    
                <NavLink 
                    to="/foster-parent/income"
                    style={({isActive}) => isActive ? activeStyle : null}
                >
                    Income
                </NavLink>

                <NavLink 
                    to="/foster-parent/adoptees"
                    style={({isActive}) => isActive ? activeStyle : null}
                >
                    Adoptees
                </NavLink>

                <NavLink 
                    to="/foster-parent/reviews"
                    style={({isActive}) => isActive ? activeStyle : null}
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}


