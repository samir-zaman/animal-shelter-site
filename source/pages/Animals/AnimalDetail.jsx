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

    const handleMeetMeClick = (animal) => {
        const existing = JSON.parse(localStorage.getItem("selectedAnimals")) || []
        
        const exists = existing.some(a => a.id === animal.id)
        if (!exists) {
            existing.push(animal)
            localStorage.setItem("selectedAnimals", JSON.stringify(existing))
        }
    }


    return(
            <div className="animal-details-wrapper">
                {animal ? (
                <>
                    <section className="animal-details-hero">
                        <h1 className="animal-details-header">Meet <span className="text-color-animation">{animal.name}</span></h1>
                        <div className="animal-details-image-wrapper">
                            <img 
                                className="animal-details-image" 
                                src={animal.imageUrl}
                                alt = {`Photo of ${animal.name}`} 
                            />
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
                                to="hobbies"
                                style={({isActive}) => isActive ? activeStyle : null}
                            >
                                Hobbies
                            </NavLink>
                        </nav>
                        <Outlet context={{animal}}/>
                    </section>
                    <Link
                        to="/schedule"
                        onClick = {() => handleMeetMeClick(animal)} 
                        className="square-button green-square-button"
                    >
                        Meet me
                    </Link>
                </>
            ) : <h2>Loading...</h2>}
            </div>
    )
}
