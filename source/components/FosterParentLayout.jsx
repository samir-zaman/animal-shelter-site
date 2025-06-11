import React from 'react'
import {useNavigate, NavLink, Outlet} from 'react-router-dom'

export default function FosterParentLayout() {
    const navigate = useNavigate();

    const activeStyle = {
        color: "var(--brown)"
    }

    const handleLogout = () => {
        localStorage.setItem('authenticated', 'false');
        navigate("..");
      };

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
                <button className='square-button' onClick={handleLogout}>
                    Logout
                </button>
            </nav>
            <Outlet/>
        </>
    )
}


