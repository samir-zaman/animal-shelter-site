import React from "react"
import { Link, useParams, Outlet, NavLink } from "react-router-dom"

export default function AdopteeDetails() {
    const [adoptee, setAdoptee] = React.useState([])
    const params = useParams()

    React.useEffect(() => {
        fetch(`/api/foster-parent/adoptees/${params.id}`)
            .then(res => res.json())
            .then(data => setAdoptee(data.animals))
    }, [params.id])

    console.log(adoptee)

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "purple"
    }

    return (
        <>
            <Link 
                id="adoptee-details-back-button"
                to=".."
                relative="path" //this prop tells the computer to take us back one "path" (e.g. from /foster-parent/adoptees/:id to /foster-parent/adoptees) instead of back one route (which would be the adoptees/:id route back to the parent foster-parent route)
            >&larr; Back to all adoptees
            </Link>
            <div className="adoptee-details-wrapper">
                <section className="adoptee-details-hero">
                    <img src={adoptee.imageUrl} width={150} />
                    <div>
                        <h2>{adoptee.name}</h2>
                        <p>{adoptee.age} years old</p>
                        <i>{adoptee.type}</i>
                    </div>
                </section>
                <nav className="adoptee-details-nav">
                    <NavLink 
                        to="."
                        end
                        style={({isActive}) => isActive ? activeStyle : null}
                    >
                        Bio
                    </NavLink>
                    <NavLink 
                        to="health"
                        style={({isActive}) => isActive ? activeStyle : null}
                    >
                        Health
                    </NavLink>
                </nav>
                <Outlet context={{adoptee}}/>
            </div>
        </>
    )
}