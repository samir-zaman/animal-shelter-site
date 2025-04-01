import React from "react"
import { useParams } from "react-router-dom"

export default function AdopteeDetails() {
    const [adoptee, setAdoptee] = React.useState([])
    const params = useParams()

    React.useEffect(() => {
        fetch(`/api/foster-parent/adoptees/${params.id}`)
            .then(res => res.json())
            .then(data => setAdoptee(data.animals))
    }, [params.id])

    return (
        <div>
            <img src={adoptee.imageUrl} width={150} />
            <h2>{adoptee.name}</h2>
            <p>{adoptee.price}</p>
            <p>{adoptee.type}</p>
        </div>
    )
}