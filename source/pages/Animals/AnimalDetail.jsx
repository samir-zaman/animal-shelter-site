import React from "react"
import { Link, useParams, Outlet, NavLink } from "react-router-dom"

export default function AnimalDetail() {
    const params = useParams();
    const [animal, setAnimal] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/animals/${params.id}`)
            .then(res => res.json())
            .then(data => setAnimal(data.animals))
    }, [params.id])

    const activeStyle = {
        fontWeight: "bold",
        color: "var(--blue)",
        borderBottom: "solid"
    }

    return(
            <div className="animal-details-wrapper">
                {animal ? (
                <>
                    <section className="animal-details-hero">
                        <h1 className="animal-details-header">Meet <span className="text-color-animation">{animal.name}</span></h1>
                        <div className="animal-details-image-wrapper">
                            <img className="animal-details-image" src={animal.imageUrl} />
                        </div>
                    </section>
                    <section className="animal-details-info">
                        <nav className="animal-details-nav">
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
                                Pictures
                            </NavLink>
                        </nav>
                        <Outlet context={{animal}}/>
                    </section>
                    <button className="square-button green-square-button">Meet me</button>
                </>
            ) : <h2>Loading...</h2>}
            </div>
    )
}
