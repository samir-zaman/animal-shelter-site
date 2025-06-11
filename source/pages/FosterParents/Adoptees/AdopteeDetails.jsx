import React from "react"
import { Link, useParams, Outlet, NavLink } from "react-router-dom"

export default function AdopteeDetails() {
    const [animal, setAnimal] = React.useState([])
    const params = useParams()

    React.useEffect(() => {
        fetch(`/api/foster-parent/adoptees/${params.id}`)
            .then(res => res.json())
            .then(data => setAnimal(data.animals))
    }, [params.id])

    const activeStyle = {
        textDecoration: "underline",
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
                    <img src={animal.imageUrl} width={300} />
                    <div>
                        <h2>{animal.name}</h2>
                        <p>{animal.age} years old</p>
                        <i>{animal.type}</i>
                    </div>
                </section>
                <nav>
                    <NavLink 
                        to="."
                        end
                        style={({isActive}) => isActive ? activeStyle : null}
                    >
                        Health
                    </NavLink>
                    <NavLink 
                        to="hobbies"
                        end
                        style={({isActive}) => isActive ? activeStyle : null}
                    >
                        Hobbies
                    </NavLink>
                </nav>
                <Outlet context={{animal}} className="outlet-container"/>
            </div>
        </>
    )
}