import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Bio() {
    const {animal} = useOutletContext()
    return(
        <>
            <h1>Bio</h1>
            <p>{animal.bio}</p>
        </>
    )
}