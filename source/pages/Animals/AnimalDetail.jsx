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
        fontSize: "1.1em",
        fontWeight: "bold",
        color: "#510116",
        borderBottom: "5px solid #510116"
    }

    return(
            <div className="animal-details-wrapper">
                {animal ? (
                <>
                    <h1 className="animal-details-header">Meet {animal.name}</h1>
                    <section className="animal-details-hero">
                        <img src={animal.imageUrl} width={450} />
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
                        <button>Adopt this cutie</button>
                    </section>
                </>
            ) : <h2>Loading...</h2>}
            </div>
    )
}
