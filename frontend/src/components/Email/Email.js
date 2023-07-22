import React, { useState } from 'react';
import './Email.css';

const Email = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can implement your subscription logic here, e.g., send data to the backend
    // For demonstration purposes, we will just set subscribed to true
    setSubscribed(true);
  };

  return (
    <div className="email-letterbox-container">
      {!subscribed ? (
        <form onSubmit={handleSubmit} className="email-form">
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Your Name"
            className="input-field"
          />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Your Email"
            className="input-field"
          />
          <button type="submit" className="subscribe-btn">
            Subscribe
          </button>
        </form>
      ) : (
        <div className="subscription-success">
          <p>Thank you, {name}, for subscribing!</p>
          <p>You will receive exciting updates in your inbox.</p>
        </div>
      )}
    </div>
  );
};

export default Email;
