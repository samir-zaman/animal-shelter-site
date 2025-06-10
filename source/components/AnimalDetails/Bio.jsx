import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Bio() {
    const {animal} = useOutletContext()
    return(
        <>
            <p><span className="p-bold">Age:</span> {animal.age}</p>
            <p><span className="p-bold">Name:</span> {animal.name}</p>
            <p><span className="p-bold">Type:</span> {animal.type}</p>
            <p><span className="p-bold">Bio:</span> {animal.bio}</p>
        </>
    )
}