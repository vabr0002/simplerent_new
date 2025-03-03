"use client";
import { useState, useEffect } from "react";

const CheckOut = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    zip: "",
    city: "",
    country: "Denmark",
    phone: "",
    vatNumber: "",
    orderNotes: "",
    paymentMethod: "credit-card",
    shippingMethod: "standard",
  });

  const [orderSummary, setOrderSummary] = useState([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderSummary = async () => {
      try {
        const res = await fetch("/api/order-summary");

        // Check if response is actually JSON
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Received non-JSON response from API");
        }

        const data = await res.json();
        setOrderSummary(data.items);
        setTotal(data.total);
      } catch (error) {
        console.error("Error fetching order summary:", error);
        setError("Failed to load order summary. Please try again.");
      }
    };

    fetchOrderSummary();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting order:", formData);
    alert("Order submitted successfully!");
    // Here you can send formData to your backend API
  };

  return (
    <>
      {/* Checkout Header */}
      <div className="flex flex-col items-center justify-center py-6 bg-black text-white">
        <h1 className="text-h1 text-center">Checkout</h1>
      </div>

      {/* Responsive Checkout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 min-h-screen bg-black text-white">
        {/* Checkout Form Container */}
        <div className="bg-black text-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <h1 className="text-h1 font-bold mb-6">E-MAIL</h1>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray rounded-md bg-lightgray text-black placeholder-darkgrey text-lg mb-6"
              placeholder="Enter your email"
              required
            />

            {/* Billing Address Section */}
            <h2 className="text-h2 font-bold mb-4">Billing Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" className="input-style" required />
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" className="input-style" required />
            </div>

            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company" className="input-style w-full mt-4" />
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address (incl. house number and floor)" className="input-style w-full mt-4" required />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input type="text" name="zip" value={formData.zip} onChange={handleChange} placeholder="Zip code" className="input-style" />
              <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="input-style" />
            </div>

            {/* Country Select */}
            <select name="country" value={formData.country} onChange={handleChange} className="input-style w-full mt-4 text-black" required>
              <option>Denmark</option>
              <option>Sweden</option>
              <option>Norway</option>
              <option>Germany</option>
            </select>

            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="input-style w-full mt-4" required />
            <input type="text" name="vatNumber" value={formData.vatNumber} onChange={handleChange} placeholder="VAT number" className="input-style w-full mt-4" />

            <p className="text-sm text-gray mt-2">
              Enter your VAT / business reg. no. - for EU B2B VAT will be deducted
            </p>

            {/* Additional Information */}
            <h2 className="text-h2 font-bold mt-8">Additional information</h2>
            <textarea
              name="orderNotes"
              value={formData.orderNotes}
              onChange={handleChange}
              placeholder="Notes about your order, e.g. special notes for delivery."
              className="input-style w-full h-24 mt-4"
            ></textarea>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-primary text-black font-bold py-3 rounded-lg hover:bg-green mt-6 transition">
              Complete Order
            </button>
          </form>
        </div>

        {/* Order Summary - Dynamic */}
        <div className="bg-black p-6 rounded-lg shadow-lg">
          <h2 className="text-h2 font-bold mb-4">Order Summary</h2>
          {error ? (
            <p className="text-red">{error}</p>
          ) : (
            <ul className="text-white">
              {orderSummary.map((item, index) => (
                <li key={index} className="flex justify-between mb-2">
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                </li>
              ))}
              <hr className="my-2 border-darkgrey" />
              <li className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default CheckOut;