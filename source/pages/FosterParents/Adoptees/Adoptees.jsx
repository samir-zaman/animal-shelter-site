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
            <div className="adoptees-tile">
                <img src={adoptee.imageUrl} alt={`Photo of ${adoptee.name}`} width={200}/>
                <div className='adoptees-tile-text'>
                    <h3>{adoptee.name}</h3>
                    <p>{adoptee.age} years old</p>
                </div>
            </div>
        </Link>
    ))


    return(
        <section className="adoptees-wrapper">
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