import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>Every tail deserves a tomorrow.</h1>
            <p>Every rescue has a story waiting for a happy ending. Adopt today and be the hero of their next chapter.</p>
            <Link className="link-button" to="animals">Find your new best friend</Link>
        </div>
    )
};