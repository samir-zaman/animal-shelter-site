import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Bio() {
    const {adoptee} = useOutletContext()
    return(
        <>
            <h1>Bio</h1>
            <p>{adoptee.bio}</p>
        </>
    )
}