import React from "react"
import aboutImg from "../assets/images/about-hero.jpg"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <img src={aboutImg} className="about-hero-image" />
            <div className="about-page-content">
                <h1>Every rescue shelter has a story - here's ours.</h1>
                <p>Our mission is to match every pet with the perfect forever home. We rescue, rehabilitate, and rehome—so you can adopt with confidence and give a furry friend their happily ever after. 🐾</p>
                <p>Our team is made up of passionate animal lovers who know firsthand the joy of giving rescues a second chance.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your new best friend is waiting.<br /> Start your rescue story now.</h2>
                <Link className="link-button" to="/vans">Find your rescue</Link>
            </div>
        </div>
    );
}