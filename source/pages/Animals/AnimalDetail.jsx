import React from "react"
import { useParams } from "react-router-dom"

export default function AnimalDetail() {
    const params = useParams();
    const [animal, setAnimal] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/animals/${params.id}`)
            .then(res => res.json())
            .then(data => setAnimal(data.animals))
    }, [params.id])

    return(
            <div className="animal-detail-container">
                {animal ? (
                <>
                    <img src={animal.imageUrl} />
                    <i>{animal.type}</i>
                    <h2>{animal.name}</h2>
                    <p>{animal.age} years old</p>
                    <p>{animal.description}</p>
                    <button>Adopt this cutie</button>
                </>
            ) : <h2>Loading...</h2>}
            </div>
    )
}
