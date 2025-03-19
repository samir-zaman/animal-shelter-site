import React from "react";

export default function Animals() {
    const [animals, setAnimals] = React.useState([])
    React.useEffect(() => {
        fetch("/api/animals")
            .then(res => res.json())
            .then(data => setAnimals(data.animals))
    }, [])

    const animalElements = animals.map(animal => (
        <div key={animal.id} className="animal-tile">
            <img src={animal.imageUrl} />
            <div className="animal-info">
                <h3>{animal.name}</h3>
                <p>${animal.price}<span>/day</span></p>
            </div>
            <i className={`animal-type ${animal.type} selected`}>{animal.type}</i>
        </div>
    ))

    return(
        <>
        {animalElements}
        </>
    );
}

