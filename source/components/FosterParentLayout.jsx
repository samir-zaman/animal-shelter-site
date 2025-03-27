import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export default function FosterParentLayout() {
    return(
        <>
            <nav>
                <Link to="/foster-parent">Dashboard</Link>
                <Link to="/foster-parent/income">Income</Link>
                <Link to="/foster-parent/reviews">Reviews</Link>
            </nav>
            <Outlet />
        </>
    )
}


