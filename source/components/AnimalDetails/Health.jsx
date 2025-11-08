import React from 'react'
import { useOutletContext } from 'react-router-dom'

import vaccineIcon from '../../assets/icons/Health/vaccine.svg'
import surgeryIcon from '../../assets/icons/Health/surgery.svg'
import barkIcon from '../../assets/icons/Health/bark.svg'
import toiletIcon from '../../assets/icons/Health/toilet.svg'
import otherIcon from '../../assets/icons/Health/other.svg'

export default function Health() {
    const { animal } = useOutletContext()

    return (
        <>
            <div className="health-stat-container">
                <img className="icon" src={vaccineIcon} alt="Syringe icon" />
                <p>Vaccinations: {animal.vaccines}</p>
            </div>
            <div className="health-stat-container">
                <img className="icon" src={surgeryIcon} alt="Surgery icon" />
                <p>Spayed/neutered: {animal.reproductive}</p>
            </div>
            <div className="health-stat-container">
                <img className="icon" src={barkIcon} alt="Obedience icon" />
                <p>Obedience training: {animal.behavior}</p>
            </div>
            <div className="health-stat-container">
                <img className="icon" src={toiletIcon} alt="House training icon" />
                <p>House training: {animal.houseTrained}</p>
            </div>
            <div className="health-stat-container">
                <img className="icon" src={otherIcon} alt="Other icon" />
                <p>Other: {animal.other}</p>
            </div>
        </>
    )
}


/*import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Health() {
    const{animal} = useOutletContext()
    return(
        <>
            <div className="health-stat-container">
                <img className="icon" src={"../../assets/icons/Health/vaccine.svg"} alt="Syringe icon" />
                <p>Vaccinations: {animal.vaccines}</p>
            </div>
            <div className="health-stat-container">
                <img className="icon" src={"../../assets/icons/Health/surgery.svg"} alt="Surgery icon" />
                <p>Spayed/neutered: {animal.reproductive}</p>
            </div>
            <div className="health-stat-container">
                <img className="icon" src={"../../assets/icons/Health/bark.svg"} alt="Aggression icon" />
                <p>Obedience training: {animal.behavior}</p>
            </div>
            <div className="health-stat-container">
                <img className="icon" src={"../../assets/icons/Health/toilet.svg"} alt="Aggression icon" />
                <p>House training: {animal.houseTrained}</p>
            </div>
            <div className="health-stat-container">
                <img className="icon" src={"../../assets/icons/Health/other.svg"} alt="Aggression icon" />
                <p>Other: {animal.other}</p>
            </div>
        </>
    )
}
*/

/*
aggression
potty training
General other section (blindness, 3 legs, etc)
*/

