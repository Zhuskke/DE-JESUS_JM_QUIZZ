import React, { useState } from 'react';

const ShippingScreen = ({ submitShippingInfo }) => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const shippingInfo = {
      address,
      city,
      zipCode,
      country,
    };
    submitShippingInfo(shippingInfo);
  };

  return (
    <div className="shipping-screen">
      <h2>Shipping Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="text"
            id="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default ShippingScreen;
