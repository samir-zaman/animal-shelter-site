import React from "react"
import { Link } from "react-router-dom"
import EmblaCarousel from '../components/EmblaCarousel/EmblaCarousel'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function About() {
    
    return (
        <div className="about-page-container">
            <picture className="about-hero-image"></picture>
            <div className="about-page-content">
                <h1>Every rescue shelter has a story - here's ours.</h1>
                <h2>Who we are</h2>
                <p>Our mission is to match every pet with the perfect forever home. We rescue, rehabilitate, and rehome—so you can adopt with confidence and give a furry friend their happily ever after. 🐾</p>
                <p>Our team is made up of passionate animal lovers who know firsthand the joy of giving rescues a second chance.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your new best friend is waiting.<br /> Start your rescue story now.</h2>
                <Link className="link-button" to="/animals">Find your rescue</Link>
            </div>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    );
}