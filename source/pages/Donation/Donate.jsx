import React from "react"
import CheckoutForm from "./CheckoutForm"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import donateHero from "../assets/images/donate-hero.jpg"

const stripePromise = loadStripe('pk_test_51REzCLQB66owRwDgF1Vj8rsbnUd7tHd4U5QYDUTqTuDViUk9HbUW1IAjQ35VEwrMFTiO6o4ELToyYJkmncBc5rhq003pLwRgEg');

export default function Donate() {
    return (
        <div className="donate-page-wrapper">
            <main className="donate-page-flex-container">
                <section className="donate-content-container">
                    <img src={donateHero} alt="lonely foster puppy" />
                    <h2>Make a difference.</h2>
                    <p>At Furry Futures, we are committed to the welfare and dignity of every animal that comes through our doors. Too many animals are abandoned, mistreated, or left without proper care. While this shelter is part of a demonstration, the need it represents is urgent and real. Shelters across the country operate under constant pressure—limited funding, rising medical costs, and overcrowded facilities. <span className="p-bold">Donations are what make it possible to keep going.</span></p>

                    <p>When you give, you’re not just offering charity—you’re providing the essentials: medical treatment, safe housing, nutritious food, and the resources needed to prepare these animals for adoption into responsible, loving homes. <span className="p-bold">Your support helps ensure that no animal is forgotten or left behind. </span> Every contribution is a step toward a more compassionate, humane future.</p>
                </section>
                <section className="donate-form-container">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </section>
            </main>
        </div>
    )
}