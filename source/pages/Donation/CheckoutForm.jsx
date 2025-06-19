import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51REzCLQB66owRwDgF1Vj8rsbnUd7tHd4U5QYDUTqTuDViUk9HbUW1IAjQ35VEwrMFTiO6o4ELToyYJkmncBc5rhq003pLwRgEg'); // publishable stripe key

const presetAmounts = [20, 30, 40, 50, 100];

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedAmount, setSelectedAmount] = useState(20);
  const [customAmount, setCustomAmount] = useState('');
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zip: '',
  });

  const getFinalAmount = () => {
    const amount = selectedAmount === 'custom' ? Number(customAmount) : selectedAmount;
    return isNaN(amount) ? 0 : amount;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { token, error } = await stripe.createToken(cardElement, {
      name: formData.name,
      address_zip: formData.zip,
    });

    if (error) {
      setStatus(`Error: ${error.message}`);
    } else {
      setStatus(`Success! Token: ${token.id}`);
      console.log('Token:', token);
      console.log('Amount:', getFinalAmount());
      console.log('Monthly:', isMonthly);
      console.log('Form Data:', formData);
    }
  };

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <form className="donation-form" onSubmit={handleSubmit}>
      <div className="frequency-toggle-container">
        <button
          type="button"
          className={isMonthly ? 'active' : ''}
          onClick={() => setIsMonthly(true)}
        >
          Give monthly 
        </button>
        <button
          type="button"
          className={!isMonthly ? 'active' : ''}
          onClick={() => setIsMonthly(false)}
        >
          Give once
        </button>
      </div>

      <div className="amount-options">
        {presetAmounts.map((amt) => (
          <button
            key={amt}
            type="button"
            className={`amount-button ${selectedAmount === amt ? 'active' : ''}`}
            onClick={() => handleAmountClick(amt)}
          >
            ${amt}
          </button>
        ))}
        {/*Other Amount input field*/}
        <div className="dollar-input-container amount-button">
            <span>$</span>
            <input
            className="other-amount-input"
            type="number"
            placeholder="other"
            value={customAmount}
            onChange={(e) => {
                setCustomAmount(e.target.value)
                setSelectedAmount("custom")}}
            max="50000"
            onInvalid={(e) => e.target.setCustomValidity('Maximum donation amount is $50,000')}
            onInput={(e) => e.target.setCustomValidity('')} // reset message when typing
            />
        </div>
      </div>

      <input
        className="donate-input"
        type="text"
        name="name"
        placeholder="First name"
        value={formData.firstName}
        onChange={handleInputChange}
        required
      />

    <input
        className="donate-input"
        type="text"
        name="name"
        placeholder="Last name"
        value={formData.lastName}
        onChange={handleInputChange}
        required
      />

      

      <input
        className="donate-input"
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />

      <input
        className="donate-input"
        type="text"
        name="zip"
        placeholder="ZIP Code"
        value={formData.zip}
        onChange={handleInputChange}
      />

      <div className="card-element-wrapper donate-input">
        <CardElement />
      </div>

      <button className="donation-submit-button square-button" type="submit" disabled={!stripe}>
        Donate ${Intl.NumberFormat("en-US").format(getFinalAmount())} {isMonthly ? 'monthly' : ''}
      </button>

      {status && <div className="status-message">{status}</div>}
    </form>
  );
};