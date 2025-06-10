import React from "react"
import { Link } from "react-router-dom"
import heroImage from '/assets/images/home-hero.jpg';
import GiveIcon from '../assets/icons/give.svg?react';


export default function Home() {
    return (
        <div className="home-page-wrapper">

            <section className="hero-container home-hero-container">
                <div className="hero-text">
                    <h1 className="hero-h1">
                        Every tail deserves a  
                        <span className="purple-highlight"> tomorrow.</span>
                    </h1>
                    <p>Every rescue has a story waiting for a happy ending. Adopt today and be the hero of their next chapter.</p>
                    <Link className="fancy-button" to="animals">Find your new best friend</Link>
                </div>
                <div className="hero-image">
                    <img src={heroImage} alt="Foster puppy being petted" />
                </div>
            </section>

            <section className="home-about-container">
                <h1>Caring for animals since 2025</h1>
                <p>Furry Futures is an independent nonprofit supported entirely by our community. We exist to ensure every companion animal has access to quality medical care, compassionate shelter, and a loving home. </p>
                <Link className="main-button">LEARN MORE</Link>
            </section>

            <section className="home-stats-container">
                <h1>2024 U.S. Adoption Statistics</h1>
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
                    <div>
                        <GiveIcon id='give-icon'/>
                    </div>
                    <div>
                        <h1>Support Our Mission</h1>
                        <p>Your contribution helps cover food, housing, and veterinary costs for all animals under our care.</p>
                        <Link className="underline-button">Donate &gt;</Link>
                    </div>
                </div>
            </section>

            <section className="home-spotlight">
                <img src="../../../assets/images/about-hero.jpg" alt="Girl holding puppy" height="500"/>
                <div className="home-spotlight-left">
                    <h1>Adoption Spotlight</h1>
                    <p>Joy is a 1.5-year-old Doberman Pinscher mix with a heart full of love waiting to shine. Once she is comfortable, Joy’s happy, tail-wagging spirit shines through, and she’ll eagerly seek out love and playtime. Joy is looking for a home that will help build her confidence with kindness, patience, and plenty of encouragement. If you’re ready to help Joy blossom into the loyal and loving companion she’s meant to be, come meet her today!</p>
                    <Link className="underline-button">MEET JOY →</Link>
                </div>
            </section>

            <section className="fonts">
                <h1 className="hero-h1">--hero-h1: Caring for animals since 2025</h1>
                <h2 className="hero-h2">--hero-h2: Caring for animals since 2025</h2>
                <h1>--h1: Caring for animals since 2025</h1>
                <h2>--h2: Caring for animals since 2025</h2>
                <h3>--h3: Caring for animals since 2025</h3>
                <p>--p: Caring for animals since 2025</p>
                <p className="logo">--logo: Caring for animals since 2025</p>
                <nav>--nav: Caring for animals since 2025</nav>
            </section>

        </div>
    )
};