import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Bio() {
    const {animal} = useOutletContext()
    return(
        <>
            <h1>Hobbies go here</h1>
            <p>{animal.bio}</p>
        </>
    )
}