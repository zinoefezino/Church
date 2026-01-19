import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DonationPage = () => {
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const paystackPublicKey =
      "pk_test_460fd7c9c631040cee5c0cc18e76d7d9423ca838"; // Replace with your actual public key

    const handler = PaystackPop.setup({
      key: paystackPublicKey,
      email: email,
      amount: parseFloat(amount) * 100, // Convert to kobo
      callback: function (response) {
        // Payment successful
        navigate("/success");
      },
      onClose: function () {
        alert("Payment cancelled");
      },
    });

    handler.openIframe();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Make a Donation</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Amount (in Naira)
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
              min="1"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="purpose"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Purpose
            </label>
            <select
              id="purpose"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select purpose</option>
              <option value="offering">Offering</option>
              <option value="tithe">Tithe</option>
              <option value="others">Others</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Donate Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationPage;
