import React from "react";
import { Link } from "react-router-dom"

export default function MeetUp() {

    const [selectedAnimals, setSelectedAnimals] = React.useState(JSON.parse(localStorage.getItem("selectedAnimals")) || [])

     const handleDelete = (id) => {
        const updatedAnimals = selectedAnimals.filter(animal => animal.id !== id);
        setSelectedAnimals(updatedAnimals);
        localStorage.setItem("selectedAnimals", JSON.stringify(updatedAnimals));
    };

    const meetupTiles = selectedAnimals.map(adoptee => (
        <div className="adoptees-tile">
            <img src={adoptee.imageUrl} alt={`Photo of ${adoptee.name}`} width={200}/>
            <div className='adoptees-tile-text'>
                <h2 className='hero-h2'>{adoptee.name}</h2>
                <p>{adoptee.age} years old</p>
            </div>
            <button
                    onClick={() => handleDelete(adoptee.id)}
                >
                    Remove
            </button>
        </div>
    ))

    return(
        <>
            <div>
                {
                    selectedAnimals.length > 0 ? (
                        <section>
                            {meetupTiles}
                        </section>

                    ) : (
                            <h2>No animals selected</h2>
                        )
                }
            </div>

            <section className="appointment-form-section">
                        <h2>Schedule Your Visit</h2>
                        
                        {isSubmitted && (
                            <div className="success-message">
                                <p>✅ Your appointment request has been submitted! We'll contact you soon to confirm.</p>
                            </div>
                        )}
                        
                        <form className="appointment-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="date">Preferred Date *</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    min={new Date().toISOString().split('T')[0]}
                                    required
                                />
                            </div>

                            <button type="submit" className="square-button green-square-button">
                                Schedule Appointment
                            </button>
                        </form>
                    </section>
        </>
    );
}

