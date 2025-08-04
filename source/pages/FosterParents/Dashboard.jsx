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
                    <p className='dashboard-header hero-h1'><PersonIcon className='person-icon'/>Foster McParent</p>
                </div>
                <div className="dashboard-item-2">
                    <h2 className='dashboard-header hero-h2'><CalendarIcon className='dashboard-icon' />Calendar</h2>
                    <p><span id='cal-ital'>August 31</span>: Pudge's vet appointment</p>
                </div>
                <div className="dashboard-item-3">
                    <p className='hero-h2'>Support resources</p>
                </div>
                <div className="dashboard-item-4">
                    <h3 className='dashboard-header'><DogIcon className='dashboard-icon' />Placements</h3>
                    <p className='hero-h1'>2</p>
                </div>
                <div className="dashboard-item-5">
                    <h3 className='dashboard-header'><ClockIcon className='dashboard-icon'/>Volunteer hours</h3>
                    <p className='hero-h1'>315</p>
                </div>
                {/*hours volunteered, $ donated, years of service, # of animals care for*/}
            </div>
        </div>
    )
}