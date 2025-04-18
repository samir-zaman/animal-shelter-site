import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51REzCLQB66owRwDgF1Vj8rsbnUd7tHd4U5QYDUTqTuDViUk9HbUW1IAjQ35VEwrMFTiO6o4ELToyYJkmncBc5rhq003pLwRgEg'); // publishable stripe key

const presetAmounts = [10, 25, 50, 100];

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState('');
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
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
      <h2 className="form-title">Support Wildlife</h2>

      <div className="frequency-toggle">
        <button
          type="button"
          className={isMonthly ? 'active' : ''}
          onClick={() => setIsMonthly(true)}
        >
          Monthly
        </button>
        <button
          type="button"
          className={!isMonthly ? 'active' : ''}
          onClick={() => setIsMonthly(false)}
        >
          One-Time
        </button>
      </div>

      <div className="amount-options">
        {presetAmounts.map((amt) => (
          <button
            key={amt}
            type="button"
            className={selectedAmount === amt ? 'active' : ''}
            onClick={() => handleAmountClick(amt)}
          >
            ${amt}
          </button>
        ))}
        <button
          type="button"
          className={selectedAmount === 'custom' ? 'active' : ''}
          onClick={() => handleAmountClick('custom')}
        >
          Other
        </button>
      </div>

      {selectedAmount === 'custom' && (
        <input
          className="input"
          type="number"
          placeholder="Enter amount"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
        />
      )}

      <input
        className="input"
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />

      <input
        className="input"
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />

      <input
        className="input"
        type="text"
        name="zip"
        placeholder="ZIP Code"
        value={formData.zip}
        onChange={handleInputChange}
      />

      <div className="card-element-wrapper">
        <CardElement />
      </div>

      <button className="submit-button" type="submit" disabled={!stripe}>
        Donate ${getFinalAmount()} {isMonthly ? '/ month' : ''}
      </button>

      {status && <div className="status-message">{status}</div>}
    </form>
  );
};