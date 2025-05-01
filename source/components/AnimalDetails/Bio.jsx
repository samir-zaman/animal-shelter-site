import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Bio() {
    const {animal} = useOutletContext()
    return(
        <>
            <p>Name: {animal.name}</p>
            <p>Age: {animal.age}</p>
            <p>Type: {animal.type}</p>
            <p>Bio: {animal.bio}</p>
        </>
    )
}