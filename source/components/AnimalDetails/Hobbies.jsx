import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Hobbies() {
    const {animal} = useOutletContext()
    return(
        <div className='hobbies-container'>
            <ul>
                {animal.hobbies.split(', ').map((hobby, index) => (
                    <li key={index}>{hobby.trim()}</li>
                ))}
            </ul>
        </div>
    )
}