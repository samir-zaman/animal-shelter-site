import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-page-wrapper">
            <section className="home-hero-container">
                <h1>Every tail deserves a tomorrow.</h1>
                <p>Every rescue has a story waiting for a happy ending. Adopt today and be the hero of their next chapter.</p>
                <Link className="link-button" to="animals">Find your new best friend</Link>
            </section>
            <section className="home-about-container">
                <h1>Caring for animals since 2025</h1>
                <p>Furry Futures is an independent nonprofit supported entirely by our community. We exist to ensure every companion animal has access to quality medical care, compassionate shelter, and a loving home. </p>
                <Link className="link-button">LEARN MORE</Link>
            </section>
            <section className="home-stats-container">
                <h2>2024 U.S. Adoption Statistics</h2>
                <div className="home-stats-flex-wrapper">
                    <div>
                        <div>607k</div>
                        <div>animals euthanized</div>
                    </div>
                    <div>
                        <div>5 years</div>
                        <div>average shelter stay</div>
                    </div>
                    <div>
                        <div>5.8M</div>
                        <div>animals admitted to shelters</div>
                    </div>
                </div>
            </section>
            <section className="home-donation-container">
                <div className="home-donation-flex-wrapper">
                    <div>
                        <img src="../../assets/icons/give.png"></img>
                    </div>
                    <div>
                        <h1>Support Our Mission</h1>
                        <p>Your contribution helps cover food, housing, and veterinary costs for all animals under our care.</p>
                        <Link>Donate &gt;</Link>
                    </div>
                </div>
            </section>
            <section className="home-spotlight">
                <div className="home-spotlight-left">
                    <h1>Adoption Spotlight</h1>
                    <hr className="home-spotlight-divider"></hr>
                    <p>Joy is a 1.5-year-old Doberman Pinscher mix with a heart full of love waiting to shine. Once she is comfortable, Joy’s happy, tail-wagging spirit shines through, and she’ll eagerly seek out love and playtime. Joy is looking for a home that will help build her confidence with kindness, patience, and plenty of encouragement. If you’re ready to help Joy blossom into the loyal and loving companion she’s meant to be, come meet her today!</p>
                    <Link>MEET JOY →</Link>
                    </div>
                <img src="../../../assets/images/about-hero.jpg" alt="Girl holding puppy" height="500"/>
            </section>
        </div>
    )
};