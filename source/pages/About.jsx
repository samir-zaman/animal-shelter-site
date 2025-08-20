import React from "react"
import { Link } from "react-router-dom"
import heroImage from '/assets/images/about-hero.jpg';
import EmblaCarousel from '../components/EmblaCarousel/EmblaCarousel'

const OPTIONS = { loop: true, duration: 20 };
const SLIDES = [
  {
    id: 1,
    title: "Rescue & Rehabilitate",
    text: "We take in animals from shelters, streets, and surrenders, providing medical care, training, and lots of love to prepare them for their forever homes."
  },
  {
    id: 2,
    title: "Match & Adopt",
    text: "Our experienced team carefully matches each pet's personality and needs with the perfect family, ensuring lifelong happiness for both."
  },
  {
    id: 3,
    title: "Support & Follow-up",
    text: "We don't just say goodbye at adoption. We provide ongoing support, training resources, and check-ins to ensure every adoption is a success story."
  }
]

export default function About() {
    
    return (
        <div className="about-page-wrapper">
            <section className='about-hero-container hero-container'>
                <div className="about-hero-text">
                    <h1 className="hero-h1">Every rescue shelter has a <span className="yellow-highlight">story</span>. Here's ours.</h1>
                </div>
                <div className="hero-image-container">
                    <img className="hero-image about-hero-image" src={heroImage} alt="Girl holding puppy" />
                </div>
            </section>
            <div className="about-page-content">
                <h1>Who we are</h1>
                <p>Our mission is to match every pet with the perfect forever home. We rescue, rehabilitate, and rehome—so you can adopt with confidence and give a furry friend their happily ever after. 🐾</p>
                <p>Our team is made up of passionate animal lovers who know firsthand the joy of giving rescues a second chance.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your new best friend is waiting.<br /> Start your <span className="yellow-highlight">rescue story</span> now.</h2>
                <Link className="fancy-button" to="/animals">Find your rescue</Link>
            </div>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    );
}