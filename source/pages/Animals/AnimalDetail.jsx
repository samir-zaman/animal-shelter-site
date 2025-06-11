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
        color: "var(--purple)",
        borderBottom: "solid var(--purple)"
    }

    return(
            <div className="animal-details-wrapper">
                {animal ? (
                <>
                    <section className="animal-details-hero">
                        <h2 className="hero-h2">Meet <span className="text-color-animation">{animal.name}</span></h2>
                        <img src={animal.imageUrl} width={400} />
                    </section>
                    <section className="animal-details-info">
                        <nav>
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
                    <button className="fancy-button">Meet me</button>
                </>
            ) : <h2>Loading...</h2>}
            </div>
    )
}
