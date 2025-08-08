import React from "react"
import { Link } from "react-router-dom"
import heroImage from '/assets/images/home-hero.jpg';
import GiveIcon from '../assets/icons/Health/give.svg?react';


export default function Home() {
    const [spotlightAnimal, setSpotlightAnimal] = React.useState(null)

    React.useEffect(() => {
    fetch("/api/animals")
        .then(res => res.json())
        .then(data => setSpotlightAnimal(data.animals[8]))
    }, [])

    return (
        <div className="home-page-wrapper">

            <section className="hero-container home-hero-container">
                <div className="home-hero-text">
                    <h1 className="hero-h1">
                        Every tail deserves a  
                        <span className="blue-highlight"> tomorrow.</span>
                    </h1>
                    <p>Every rescue has a story waiting for a happy ending. Adopt today and be the hero of their next chapter.</p>
                    <Link className="fancy-button" to="animals">Find your new best friend</Link>
                </div>
                <div className="hero-image-container">
                    <img className="hero-image" src={heroImage} alt="Foster puppy being petted" />
                </div>
            </section>

            <section className="home-about-container">
                <h2 className="hero-h2">Caring for animals since 2025</h2>
                <p>Furry Futures is an independent nonprofit supported entirely by our community. We exist to ensure every companion animal has access to quality medical care, compassionate shelter, and a loving home. </p>
                <Link className="square-button" aria-label="learn more about our story">LEARN MORE</Link>
            </section>

            <section className="home-stats-container">
                <h1><span className="logo">2024</span> U.S. Adoption Statistics</h1>
                <div className="home-stats-flex-wrapper">
                    <div>
                        <div className="statistic">607k</div>
                        <div className="statistic-description">animals euthanized</div>
                    </div>
                    <div>
                        <div className="statistic">5 years</div>
                        <div className="statistic-description">average shelter stay</div>
                    </div>
                    <div>
                        <div className="statistic">5.8M</div>
                        <div className="statistic-description">animals admitted to shelters</div>
                    </div>
                </div>
            </section>

            <section className="home-donation-container">
                <div className="home-donation-flex-wrapper">
                    <div className="home-donation-left">
                        <GiveIcon className='give-icon'/>
                    </div>
                    <div className="home-donation-right">
                        <h1 className="hero-h1">Support Our Mission</h1>
                        <p>Your contribution helps cover food, housing, and veterinary costs for all animals under our care.</p>
                        <Link className="underline-button home-donation-button">Donate →</Link>
                    </div>
                </div>
            </section>

            <section className="home-adoption-spotlight-container">
                <div className="home-adoption-spotlight-left">
                    <h1>Adoption Spotlight</h1>
                    <p>{spotlightAnimal ? spotlightAnimal.bio : "Loading..."}</p>
                    <Link className="square-button" to={`/animals/${spotlightAnimal?.id}`}>
                        MEET {spotlightAnimal?.name?.toUpperCase()}
                    </Link>
                </div>
                <div className="home-adoption-spotlight-right">
                    {spotlightAnimal && (
                        <img 
                            src={spotlightAnimal.imageUrl} 
                            alt={`${spotlightAnimal.name}, a ${spotlightAnimal.breed} looking for a home`} 
                        />
                        )}
                </div>
            </section>
        </div>
    )
};