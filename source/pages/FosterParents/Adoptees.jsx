import React from 'react';
import {Link} from "react-router-dom"

export default function Adoptees() {
    const [adoptees, setAdoptees] = React.useState([])

    React.useEffect(() => {
        fetch("/api/foster-parent/adoptees")
            .then(res => res.json())
            .then(data => setAdoptees(data.animals))
    }, [])

    const adopteesEls = adoptees.map(adoptee => (
        <Link 
            to={`/foster-parent/adoptees/${adoptee.id}`}
            key={adoptee.id}
        >
            <div>
                <img src={adoptee.imageUrl} alt={`Photo of ${adoptee.name}`} />
                <div>
                    <h3>{adoptee.name}</h3>
                    <p>${adoptee.price}/day</p>
                </div>
            </div>
        </Link>
    ))


    return(
        <section>
            <h1>Your foster animals</h1>
            <div>
                {
                    adoptees.length > 0 ? (
                        <section>
                            {adopteesEls}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </section>
    )
}