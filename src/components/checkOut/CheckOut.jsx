"use client";
import { useState, useEffect } from "react";

// List of all countries
const countries = [
  "Denmark",
  "Sweden",
  "Norway",
  "Germany",
  "United States",
  "United Kingdom",
  "Canada",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "Australia",
  "Japan",
  "China",
  "Brazil",
  "Mexico",
  "India",
  "South Africa",
];

const CheckOutComponent = () => {
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
  const [subtotal, setSubtotal] = useState(0);
  const [vatAmount, setVatAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const items = [
      { name: "Product 1", price: 49.99 },
      { name: "Product 2", price: 29.99 },
      { name: "Product 3", price: 19.99 },
    ];

    const subtotalPrice = items.reduce((acc, item) => acc + item.price, 0);
    const vat = formData.vatNumber ? 0 : subtotalPrice * 0.25;
    const totalPrice = subtotalPrice + vat;

    setOrderSummary(items);
    setSubtotal(subtotalPrice);
    setVatAmount(vat);
    setTotal(totalPrice);
  }, [formData.vatNumber]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting order:", formData);
    alert("Order submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Checkout Header */}
      <div className="flex flex-col items-center justify-center py-6">
        <h1 className="text-h1 text-center">Checkout</h1>
      </div>

      {/* Responsive Checkout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Checkout Form */}
        <div className="bg-black text-white p-10 rounded-xl">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="input-style h-14 p-4 text-xl rounded-lg"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="input-style h-14 p-4 text-xl rounded-lg"
                required
              />
            </div>

            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="input-style w-full h-14 p-4 text-xl rounded-lg"
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address (incl. house number and floor)"
              className="input-style w-full h-14 p-4 text-xl rounded-lg"
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                placeholder="Zip code"
                className="input-style h-14 p-4 text-xl rounded-lg"
              />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="input-style h-14 p-4 text-xl rounded-lg"
              />
            </div>

            {/* Country Select */}
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="input-style w-full h-14 p-4 text-xl bg-gray-800 text-white rounded-lg"
              required
            >
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="input-style w-full h-14 p-4 text-xl rounded-lg"
              required
            />
            <input
              type="text"
              name="vatNumber"
              value={formData.vatNumber}
              onChange={handleChange}
              placeholder="VAT number"
              className="input-style w-full h-14 p-4 text-xl rounded-lg"
            />

            {/* Payment Method Selection */}
            <h2 className="text-h2 font-bold">Payment Method</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit-card"
                  checked={formData.paymentMethod === "credit-card"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Credit Card
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === "paypal"}
                  onChange={handleChange}
                  className="mr-2"
                />
                PayPal
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank-transfer"
                  checked={formData.paymentMethod === "bank-transfer"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Bank Transfer
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-lime text-black font-bold py-6 rounded-lg hover:bg-green transition text-xl"
            >
              Complete Order
            </button>
          </form>
        </div>

        {/* Order Overview (Sticky) */}
        <div className="bg-black text-white p-10 rounded-xl sticky top-10 h-fit">
          <h2 className="text-h2 font-bold mb-4">Order Summary</h2>
          <ul>
            {orderSummary.map((item, index) => (
              <li key={index} className="flex justify-between text-lg mb-2">
                <span>{item.name}</span>
                <span>{item.price.toFixed(2)} DKK</span>
              </li>
            ))}
          </ul>
          <hr className="my-4 border-gray" />
          <p className="flex justify-between text-lg">
            <span>Subtotal (Excl. VAT):</span>
            <span>{subtotal.toFixed(2)} DKK</span>
          </p>
          <p className="flex justify-between text-lg">
            <span>VAT (25%):</span>
            <span>{vatAmount.toFixed(2)} DKK</span>
          </p>
          <p className="flex justify-between text-xl font-bold">
            <span>Total (Incl. VAT):</span>
            <span>{total.toFixed(2)} DKK</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckOutComponent;
