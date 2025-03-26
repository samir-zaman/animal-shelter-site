import React from "react";
import { Link } from "react-router-dom"

//import animals from api, map over them, and display as tiles. 

export default function Animals() {
    const [animals, setAnimals] = React.useState([])
    React.useEffect(() => {
        fetch("/api/animals")
            .then(res => res.json())
            .then(data => setAnimals(data.animals))
    }, []) //empty dependency array so the fetch request only runs once.

    const animalElements = animals.map(animal => (
        <div key={animal.id} className="animal-tile">
            <Link 
            to={`/animals/${animal.id}`} 
            aria-label = {`View details for ${animal.name}`}
            >
                <img src={animal.imageUrl} />
                <div className="animal-info">
                    <h3>{animal.name}</h3>
                    <p>${animal.price}<span>/day</span></p>
                </div>
                <i className={`animal-type ${animal.type} selected`}>{animal.type}</i>
            </Link>
        </div>
    ))

    return(
        <div className="animal-list-container">
            <h1>Meet our animals</h1>
            <div className="animal-list">
                {animalElements}
            </div>
        </div>
    );
}

