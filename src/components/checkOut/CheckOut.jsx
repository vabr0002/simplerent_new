"use client";
import { useState, useEffect } from "react";

// Reusable input field component for form inputs
const InputField = ({
  label, // Label text for the input
  name, // Input name for form handling
  value, // Current value of the input
  onChange, // Function to handle input changes
  placeholder, // Placeholder text
  required, // Whether the field is required
  type = "text", // Input type (defaults to "text")
  className = "" // Additional CSS classes for customization
}) => (
  <div className="space-y-2">
    {label && (
      <label htmlFor={name} className="block text-sm font-medium text-gray-300">
        {label} {/* Display label if provided */}
      </label>
    )}
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`w-full p-4 h-14 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 text-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all ${className}`}
      // Styled input with focus ring and transition effects
    />
  </div>
);

// Reusable select field component for dropdowns
const SelectField = ({ label, name, value, onChange, options, required }) => (
  <div className="space-y-2">
    {label && (
      <label htmlFor={name} className="block text-sm font-medium text-gray-300">
        {label} {/* Display label if provided */}
      </label>
    )}
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full h-14 p-4 text-lg bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
      required={required}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option} {/* Render each option from the provided array */}
        </option>
      ))}
    </select>
  </div>
);

// Reusable radio button group component
const RadioGroup = ({ label, name, value, onChange, options }) => (
  <div className="space-y-3">
    {label && (
      <label className="block text-sm font-medium text-gray-300">{label}</label>
    )}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {options.map((option, index) => (
        <label
          key={index}
          className="flex items-center space-x-3 p-3 border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-800 transition-all"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
            className="h-4 w-4 text-lime-500 focus:ring-lime-500 border-gray-600"
          />
          <span className="flex items-center">
            {option.icon && <span className="mr-2">{option.icon}</span>}{" "}
            {/* Optional icon */}
            <span>{option.label}</span> {/* Radio option label */}
          </span>
        </label>
      ))}
    </div>
  </div>
);

// List of all countries for the country dropdown
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
  "South Africa"
];

// Payment method options with icons
const paymentMethods = [
  { value: "credit-card", label: "Credit Card", icon: "💳" },
  { value: "paypal", label: "PayPal", icon: "🔄" },
  { value: "bank-transfer", label: "Bank Transfer", icon: "🏦" }
];

// Shipping method options with prices
const shippingMethods = [
  { value: "standard", label: "Standard (3-5 days)", price: 39 },
  { value: "express", label: "Express (1-2 days)", price: 79 },
  { value: "pickup", label: "Store Pickup", price: 0 }
];

// Main checkout component
const CheckOutComponent = () => {
  // State for form data
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
    newsletter: false,
    acceptTerms: false
  });

  // State for cart and cost calculations
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [vatAmount, setVatAmount] = useState(0);
  const [shippingCost, setShippingCost] = useState(39); // Default shipping cost
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  // Load cart items on mount (simulated data)
  useEffect(() => {
    // Simulate loading cart items from a store or API
    const items = [
      { id: 1, name: "Allen & Heath SQ5 Mixer", price: 950, quantity: 1 },
      { id: 2, name: "Shure SM58 Microphone", price: 150, quantity: 2 }
    ];
    setCartItems(items);
  }, []);

  // Calculate costs whenever cart items, VAT number, or shipping method changes
  useEffect(() => {
    const subtotalPrice = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    // Apply VAT logic: no VAT if valid VAT number is provided (minimum 6 chars)
    const hasValidVat = !!formData.vatNumber && formData.vatNumber.length > 5;
    const vat = hasValidVat ? 0 : subtotalPrice * 0.25;

    // Get shipping cost based on selected shipping method
    const selectedShipping = shippingMethods.find(
      (method) => method.value === formData.shippingMethod
    );
    const shipping = selectedShipping ? selectedShipping.price : 0;

    setSubtotal(subtotalPrice);
    setVatAmount(vat);
    setShippingCost(shipping);
    setTotal(subtotalPrice + vat + shipping);
  }, [cartItems, formData.vatNumber, formData.shippingMethod]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });

    // Clear validation error when field is edited
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: null
      });
    }
  };

  // Validate form fields before submission
  const validate = () => {
    const errors = {};

    if (!formData.email.includes("@")) {
      errors.email = "Please enter a valid email address";
    }

    if (formData.zip && !/^\d{4,5}$/.test(formData.zip)) {
      errors.zip = "Please enter a valid zip code";
    }

    if (formData.phone && !/^\+?[\d\s]{8,}$/.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number";
    }

    if (!formData.acceptTerms) {
      errors.acceptTerms = "You must accept the terms and conditions";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0; // Returns true if no errors
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      // Scroll to the first error if validation fails
      const firstError = document.querySelector("[data-error]");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call for order submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Order submitted:", { formData, cartItems, total });

      // Show success message (replace with redirect if needed)
      alert("Order submitted successfully!");
      // Optional: Reset form or redirect
      // window.location.href = "/confirmation";
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("There was an error processing your order. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-6">
      {/* Progress steps */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-lime-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">
              1
            </div>
            <div className="ml-2">Cart</div>
          </div>
          <div className="h-1 bg-gray-700 flex-grow mx-2">
            <div className="h-full bg-lime-500 w-full"></div>{" "}
            {/* Progress bar */}
          </div>
          <div className="flex items-center">
            <div className="bg-lime-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">
              2
            </div>
            <div className="ml-2">Checkout</div>
          </div>
          <div className="h-1 bg-gray-700 flex-grow mx-2"></div>
          <div className="flex items-center opacity-50">
            <div className="bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
              3
            </div>
            <div className="ml-2">Confirmation</div>
          </div>
        </div>
      </div>

      {/* Checkout Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">
          Checkout
        </h1>
        <p className="text-gray-400 text-center md:text-left mt-2">
          Please fill in your details to complete your order
        </p>
      </div>

      {/* Main checkout grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side - Checkout form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="bg-gray-900 p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <span className="bg-lime-500 text-black rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 text-sm">
                    1
                  </span>
                  Contact Information
                </h2>

                <div className="space-y-4">
                  <InputField
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    required
                    type="email"
                    data-error={validationErrors.email}
                  />
                  {validationErrors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {validationErrors.email} {/* Email error message */}
                    </p>
                  )}

                  <InputField
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    required
                    data-error={validationErrors.phone}
                  />
                  {validationErrors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {validationErrors.phone} {/* Phone error message */}
                    </p>
                  )}

                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="h-5 w-5 text-lime-500 rounded focus:ring-lime-500 border-gray-600"
                    />
                    <span className="text-gray-300">
                      Subscribe to our newsletter
                    </span>
                  </label>
                </div>
              </div>

              {/* Billing Address */}
              <div className="bg-gray-900 p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <span className="bg-lime-500 text-black rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 text-sm">
                    2
                  </span>
                  Billing Address
                </h2>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      required
                    />
                    <InputField
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      required
                    />
                  </div>

                  <InputField
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name (optional)"
                  />

                  {formData.company && (
                    <InputField
                      name="vatNumber"
                      value={formData.vatNumber}
                      onChange={handleChange}
                      placeholder="VAT number (if applicable)"
                    />
                  )}

                  <InputField
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Street address, house number, and floor"
                    required
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      placeholder="Zip code"
                      required
                      data-error={validationErrors.zip}
                    />
                    <InputField
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                      required
                    />
                  </div>

                  {validationErrors.zip && (
                    <p className="text-red-500 text-sm mt-1">
                      {validationErrors.zip} {/* Zip code error message */}
                    </p>
                  )}

                  <SelectField
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    options={countries}
                    required
                  />
                </div>
              </div>

              {/* Shipping Method */}
              <div className="bg-gray-900 p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <span className="bg-lime-500 text-black rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 text-sm">
                    3
                  </span>
                  Shipping Method
                </h2>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-3">
                    {shippingMethods.map((method, index) => (
                      <label
                        key={index}
                        className={`flex justify-between items-center p-4 border ${formData.shippingMethod === method.value ? "border-lime-500 bg-gray-800" : "border-gray-700"} rounded-lg cursor-pointer hover:bg-gray-800 transition-all`}
                      >
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="shippingMethod"
                            value={method.value}
                            checked={formData.shippingMethod === method.value}
                            onChange={handleChange}
                            className="h-4 w-4 text-lime-500 focus:ring-lime-500 border-gray-600 mr-3"
                          />
                          <div>
                            <p className="font-medium">{method.label}</p>
                            {/* Simulated delivery dates */}
                            {method.value === "standard" && (
                              <p className="text-sm text-gray-400">
                                Delivery by Wednesday, March 5
                              </p>
                            )}
                            {method.value === "express" && (
                              <p className="text-sm text-gray-400">
                                Delivery by Tuesday, March 4
                              </p>
                            )}
                            {method.value === "pickup" && (
                              <p className="text-sm text-gray-400">
                                Available from Tuesday, March 4
                              </p>
                            )}
                          </div>
                        </div>
                        <span className="font-medium">
                          {method.price === 0 ? "FREE" : `${method.price} DKK`}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-gray-900 p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <span className="bg-lime-500 text-black rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 text-sm">
                    4
                  </span>
                  Payment Method
                </h2>

                <RadioGroup
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  options={paymentMethods}
                />

                {/* Conditional payment details based on selected method */}
                <div className="mt-6">
                  {formData.paymentMethod === "credit-card" && (
                    <div className="border border-gray-700 rounded-lg p-4 space-y-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">Card details</h3>
                        <div className="flex space-x-2">
                          <span className="text-2xl">💳</span>
                          <span className="text-2xl">💳</span>
                          <span className="text-2xl">💳</span>
                        </div>
                      </div>
                      <InputField
                        name="cardNumber"
                        placeholder="Card number"
                        className="font-mono"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <InputField name="cardExpiry" placeholder="MM/YY" />
                        <InputField name="cardCvc" placeholder="CVC" />
                      </div>
                    </div>
                  )}

                  {formData.paymentMethod === "bank-transfer" && (
                    <div className="border border-gray-700 rounded-lg p-4">
                      <p className="text-gray-300">
                        You will receive bank transfer details after placing
                        your order.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Order Notes */}
              <div className="bg-gray-900 p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-6">
                  Additional Information
                </h2>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="orderNotes"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Order Notes (optional)
                    </label>
                    <textarea
                      id="orderNotes"
                      name="orderNotes"
                      value={formData.orderNotes}
                      onChange={handleChange}
                      placeholder="Special instructions for delivery or installation"
                      className="w-full p-4 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 text-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all h-32"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Terms and Checkout */}
              <div className="bg-gray-900 p-6 rounded-xl">
                <div className="mb-6">
                  <label
                    className="flex items-start space-x-3"
                    data-error={validationErrors.acceptTerms}
                  >
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      className="h-5 w-5 text-lime-500 rounded focus:ring-lime-500 border-gray-600 mt-1"
                      required
                    />
                    <span className="text-gray-300">
                      I have read and agree to the{" "}
                      <a href="#" className="text-lime-500 underline">
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-lime-500 underline">
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                  {validationErrors.acceptTerms && (
                    <p className="text-red-500 text-sm mt-1 ml-8">
                      {validationErrors.acceptTerms} {/* Terms error message */}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className={`w-full bg-lime-500 text-black font-bold py-5 px-6 rounded-lg text-xl flex items-center justify-center transition-all ${
                    isLoading
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:bg-lime-400"
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing... {/* Loading state */}
                    </>
                  ) : (
                    <>Complete Order</>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right side - Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 p-6 rounded-xl sticky top-6">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              {/* Cart items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between pb-4 border-b border-gray-700"
                  >
                    <div className="flex">
                      <div className="w-16 h-16 bg-gray-800 rounded-md flex items-center justify-center mr-3 text-2xl flex-shrink-0">
                        {item.name.includes("Mixer") ? "🎛️" : "🎤"}{" "}
                        {/* Icon based on item type */}
                      </div>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-400">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{item.price} DKK</p>
                      <p className="text-sm text-gray-400">
                        {item.quantity > 1 &&
                          `${item.price * item.quantity} DKK total`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Discount code */}
              <div className="flex mb-6">
                <input
                  type="text"
                  placeholder="Discount code"
                  className="flex-grow p-3 border border-gray-700 rounded-l-lg bg-gray-800 text-white placeholder-gray-400"
                />
                <button className="bg-gray-700 text-white px-4 rounded-r-lg hover:bg-gray-600 transition-colors">
                  Apply
                </button>
              </div>

              {/* Cost breakdown */}
              <div className="space-y-3 pb-4 border-b border-gray-700">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>{subtotal.toFixed(2)} DKK</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>
                    Shipping (
                    {
                      shippingMethods.find(
                        (m) => m.value === formData.shippingMethod
                      )?.label
                    }
                    )
                  </span>
                  <span>{shippingCost.toFixed(2)} DKK</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>VAT (25%)</span>
                  <span>{vatAmount.toFixed(2)} DKK</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between pt-4 text-xl font-bold">
                <span>Total</span>
                <span>{total.toFixed(2)} DKK</span>
              </div>

              {/* Secure checkout note */}
              <div className="mt-6 pt-4 border-t border-gray-700 text-center text-gray-400 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span className="text-sm">
                  Secure checkout - Your data is protected
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutComponent;
