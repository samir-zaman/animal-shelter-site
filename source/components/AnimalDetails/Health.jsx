import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Health() {
    const{animal} = useOutletContext()
    return(
        <>
            <div className="health-stat-container">
                <img className="icon" src={"../../assets/icons/vaccine.svg"} alt="Syringe icon" />
                <p>Vaccinations: {animal.vaccines}</p>
            </div>
            <div className="health-stat-container">
                <img className="icon" src={"../../assets/icons/surgery.svg"} alt="Surgery icon" />
                <p>Spayed/neutered: {animal.reproductive}</p>
            </div>
            <div className="health-stat-container">
                <img className="icon" src={"../../assets/icons/bark.svg"} alt="Aggression icon" />
                <p>Obedience training: {animal.behavior}</p>
            </div>
            <div className="health-stat-container">
                <img className="icon" src={"../../assets/icons/toilet.svg"} alt="Aggression icon" />
                <p>House training: {animal.houseTrained}</p>
            </div>
            <div className="health-stat-container">
                <img className="icon" src={"../../assets/icons/other.svg"} alt="Aggression icon" />
                <p>Other: {animal.other}</p>
            </div>
        </>
    )
}

/*
aggression
potty training
General other section (blindness, 3 legs, etc)
*/

