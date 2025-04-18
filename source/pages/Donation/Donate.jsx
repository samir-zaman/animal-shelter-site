import React from "react"
import CheckoutForm from "./CheckoutForm"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51REzCLQB66owRwDgF1Vj8rsbnUd7tHd4U5QYDUTqTuDViUk9HbUW1IAjQ35VEwrMFTiO6o4ELToyYJkmncBc5rhq003pLwRgEg');

export default function Donate() {
    return (
        <div className="donate-page-wrapper">
            <section className="donate-content-container">
                <h1>Donate to Furry Futures</h1>
                <img src="../assets/images/donate-hero.jpg" />
            </section>
            <section className="donate-form-container">
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </section>
        </div>
    )
}