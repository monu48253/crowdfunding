// components/DonationForm.js

import React, { useState } from 'react';
import { useRouter } from 'next/router';

const countries = [
  { name: 'United States', code: 'US' },
  { name: 'Canada', code: 'CA' },
  { name: 'Australia', code: 'AU' },
  // Add more countries as needed
];

const DonationForm = () => {
  const [formData, setFormData] = useState({
    organization: '',
    amount: '',
    event: '',
    country: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission

    // Redirect to campaign progress page
    router.push('/create-campaign');
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold mb-8 text-center text-white">Donate Now</h2>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="organization" className="block text-sm font-bold text-gray-700">Organization</label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Enter organization name"
              className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-bold text-gray-700">Amount to Contribute</label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="event" className="block text-sm font-bold text-gray-700">Select Event</label>
            <select
              id="event"
              name="event"
              value={formData.event}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-black-300 rounded shadow-sm focus:outline-none text-gray-700 focus:border-blue-500"
            >
              <option value="">Select an event</option>
              <option value="event1">Event 1</option>
              <option value="event2">Event 2</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-bold text-gray-700">Country</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none text-gray-700 focus:border-blue-500"
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
