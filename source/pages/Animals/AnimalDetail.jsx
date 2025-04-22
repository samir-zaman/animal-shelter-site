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
                    <p>{animal.description}</p>
                    <button>Adopt this cutie</button>
                </>
            ) : <h2>Loading...</h2>}
            </div>
    )
}
