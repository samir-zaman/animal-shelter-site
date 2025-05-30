import React from "react"
import { Link } from "react-router-dom"
import heroImage from '/assets/images/about-hero.jpg';
import EmblaCarousel from '../components/EmblaCarousel/EmblaCarousel'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function About() {
    
    return (
        <div className="about-page-wrapper">
            <section className='hero-container about-hero-container'>
                <div className="hero-text">
                    <h1 className="hero-h1">Every rescue shelter has a <span className="about-hero-h1-highlight">story</span> - here's ours.</h1>
                </div>
                <div className="hero-image">
                    <img src={heroImage} alt="Girl holding puppy" />
                </div>
            </section>
            <div className="about-page-content">
                <h2>Who we are</h2>
                <p>Our mission is to match every pet with the perfect forever home. We rescue, rehabilitate, and rehome—so you can adopt with confidence and give a furry friend their happily ever after. 🐾</p>
                <p>Our team is made up of passionate animal lovers who know firsthand the joy of giving rescues a second chance.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your new best friend is waiting.<br /> Start your rescue story now.</h2>
                <Link className="big-button" to="/animals">Find your rescue</Link>
            </div>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    );
}