import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Health() {
    const{animal} = useOutletContext()
    return(
        <>
            <h1>Health Stats</h1>
            <p>{animal.health}</p>
        </>
    )
}