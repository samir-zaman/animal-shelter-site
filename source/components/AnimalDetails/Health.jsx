import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Health() {
    const{animal} = useOutletContext()
    return(
        <>
            <h1>Health Stats</h1>
            <div className="health-stat-container">
                <img className="icon" src={"../../assets/icons/vaccine.png"} alt="Syringe icon" />
                <p>{animal.vaccines}</p>
            </div>
            <div className="health-stat-container">
                <img className="icon" src={"../../assets/icons/surgery.png"} alt="Surgery icon" />
                <p>{animal.reproductive}</p>
            </div>
            <div className="health-stat-container">
                <img className="icon" src={"../../assets/icons/bark.png"} alt="Aggression icon" />
                <p>{animal.behavior}</p>
            </div>
            <div className="health-stat-container">
                <img className="icon" src={"../../assets/icons/toilet.png"} alt="Aggression icon" />
                <p>{animal.houseTrained}</p>
            </div>
            <div className="health-stat-container">
                <img className="icon" src={"../../assets/icons/other.png"} alt="Aggression icon" />
                <p>{animal.other}</p>
            </div>
        </>
    )
}

/*
aggression
potty training
General other section (blindness, 3 legs, etc)
*/

