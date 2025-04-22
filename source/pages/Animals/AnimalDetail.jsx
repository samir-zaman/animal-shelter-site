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
        textDecoration: "underline",
        color: "purple"
    }

    return(
            <div className="animal-details-wrapper">
                {animal ? (
                <>
                    <section className="animal-details-hero">
                        <img src={animal.imageUrl} width={450} />
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
                            Bio
                        </NavLink>
                        <NavLink 
                            to="pics"
                            style={({isActive}) => isActive ? activeStyle : null}
                        >
                            Pictures
                        </NavLink>
                    </nav>
                <Outlet context={{animal}}/>
                <button>Adopt this cutie</button>
                </>
            ) : <h2>Loading...</h2>}
            </div>
    )
}
