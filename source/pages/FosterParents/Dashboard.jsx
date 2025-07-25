import React from 'react'
import PersonIcon from '../../assets/icons/Dashboard/person.svg?react';
import CalendarIcon from '../../assets/icons/Dashboard/calendar.svg?react';
import DogIcon from '../../assets/icons/Dashboard/dog.svg?react';
import ClockIcon from '../../assets/icons/Dashboard/clock.svg?react';



export default function Dashboard() {
    return(
        <div className='dashboard-container'>
            <div className='dashboard'>
                <div className="dashboard-item-1">
                    <PersonIcon className='person-icon'/>
                    <p className='hero-h1'>FOSTER McPARENT</p>
                </div>
                <div className="dashboard-item-2">
                    <CalendarIcon className='dashboard-icon' />
                    <p className='hero-h2'>CALENDAR</p>
                </div>
                <div className="dashboard-item-3">
                    <p className='hero-h2'>Support resources</p>
                </div>
                <div className="dashboard-item-4">
                    <DogIcon className='dashboard-icon' />
                    <h3>Placements</h3>
                    <p className='hero-h1'>2</p>
                </div>
                <div className="dashboard-item-5">
                    <ClockIcon className='dashboard-icon'/>
                    <h3>Volunteer Hours</h3>
                    <p className='hero-h1'>999</p>
                </div>
                {/*hours volunteered, $ donated, years of service, # of animals care for*/}
            </div>
        </div>
    )
}