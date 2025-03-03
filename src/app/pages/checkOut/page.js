"use client";
import { useState, useEffect } from "react";

// List of all countries
const countries = [
  "Denmark", "Sweden", "Norway", "Germany", "United States", "United Kingdom", "Canada", "France",
  "Italy", "Spain", "Netherlands", "Australia", "Japan", "China", "Brazil", "Mexico", "India", "South Africa"
];

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
    setOrderSummary([
      { name: "Product 1", price: 49.99 },
      { name: "Product 2", price: 29.99 },
      { name: "Product 3", price: 19.99 }
    ]);
    setTotal(99.97);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting order:", formData);
    alert("Order submitted successfully!");
  };

  return (
    <>
      {/* Checkout Header */}
      <div className="flex flex-col items-center justify-center py-6 bg-black text-white mt-top-spacing">
        <h1 className="text-h1 text-center">Checkout</h1>
      </div>

      {/* Responsive Checkout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 min-h-screen bg-black text-white">
        
        {/* Checkout Form */}
        <div className="bg-black text-white p-10 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h1 className="text-h1 font-bold">E-MAIL</h1>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full p-4 h-14 border border-gray rounded-lg bg-lightgray text-black placeholder-darkgrey text-xl focus:ring-2 focus:ring-primary focus:outline-none" 
              placeholder="Enter your email" 
              required 
            />

            {/* Billing Address */}
            <h2 className="text-h2 font-bold">Billing Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" className="input-style h-14 p-4 text-xl rounded-lg" required />
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" className="input-style h-14 p-4 text-xl rounded-lg" required />
            </div>

            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company" className="input-style w-full h-14 p-4 text-xl rounded-lg" />
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address (incl. house number and floor)" className="input-style w-full h-14 p-4 text-xl rounded-lg" required />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="zip" value={formData.zip} onChange={handleChange} placeholder="Zip code" className="input-style h-14 p-4 text-xl rounded-lg" />
              <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="input-style h-14 p-4 text-xl rounded-lg" />
            </div>

            {/* Country Select - Fixed Text Visibility */}
            <select name="country" value={formData.country} onChange={handleChange} className="input-style w-full h-14 p-4 text-xl bg-gray-800 text-black rounded-lg" required>
              {countries.map((country, index) => (
                <option key={index} value={country} className="text-black">
                  {country}
                </option>
              ))}
            </select>

            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="input-style w-full h-14 p-4 text-xl rounded-lg" required />
            <input type="text" name="vatNumber" value={formData.vatNumber} onChange={handleChange} placeholder="VAT number" className="input-style w-full h-14 p-4 text-xl rounded-lg" />

            <p className="text-lg text-white">
              Enter your VAT / business reg. no. - for EU B2B VAT will be deducted
            </p>

            {/* Submit Button - LIME COLOR for better visibility */}
            <button type="submit" className="w-full bg-lime text-black font-bold py-6 rounded-lg hover:bg-green transition text-xl">
              Complete Order
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckOut;