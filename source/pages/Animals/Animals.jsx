import React from "react";
import { Link, useSearchParams } from "react-router-dom"

//import animals from api, map over them, and display as tiles. 

export default function Animals() {

    const [animals, setAnimals] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("type")

    React.useEffect(() => {
        fetch("/api/animals")
            .then(res => res.json())
            .then(data => setAnimals(data.animals))
    }, []) //empty dependency array so the fetch request only runs once.

    const displayedAnimals = typeFilter
        ? animals.filter(animal => animal.type === typeFilter)
        : animals

    const animalElements = displayedAnimals.map(animal => (
        <div key={animal.id} className="animal-tile">
            <Link 
            to={`/animals/${animal.id}`} 
            aria-label = {`View details for ${animal.name}`}
            >
                <img src={animal.imageUrl} alt={`Photo of ${animal.name}`}/>
                <div className="animal-info">
                    <h3>{animal.name}</h3>
                    <p>{animal.age} years old</p>
                </div>
                <i className={`square-button ${animal.type} selected`}>{animal.type}</i>
            </Link>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return(
        <div className="animal-list-container">
            <h1>Meet our animals</h1>
            <div className="animal-list-filter-buttons">
                <p className="filter-label">Filter: </p>
                <button
                    onClick={() => handleFilterChange("type", "cuddly")}
                    className={
                        `square-button cuddly ${typeFilter === "cuddly" ? "selected" : ""}`
                    }
                >cuddly</button>
                <button
                    onClick={() => handleFilterChange("type", "adventurous")}
                    className={
                        `square-button adventurous ${typeFilter === "adventurous" ? "selected" : ""}`
                    }
                >adventurous</button>
                <button
                    onClick={() => handleFilterChange("type", "hardworking")}
                    className={
                        `square-button hardworking ${typeFilter === "hardworking" ? "selected" : ""}`
                    }
                >hardworking</button>

                {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="underline-button clear-filters"
                    >Clear filter</button>
                ) : null}
            </div>
            <div className="animal-list">
                {animalElements}
            </div>
        </div>
    );
}

