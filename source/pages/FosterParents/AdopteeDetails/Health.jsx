import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Health() {
    const{adoptee} = useOutletContext()
    return(
        <>
            <h1>Health Stats</h1>
            <p>{adoptee.health}</p>
        </>
    )
}