"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaCirclePlus } from "react-icons/fa6";
import { BiSolidSpreadsheet } from "react-icons/bi";

// Import Project components from the first file
const ProjectItem = ({ item, onRemove, onUpdateQuantity }) => (
  <li className="flex justify-between items-center py-2 border-b border-gray-300">
    <div>
      <span className="font-medium text-white">{item.name}</span>
      <span className="block text-gray-500 text-sm">{item.price} DKK</span>
    </div>
    <div className="flex items-center space-x-4">
      <div className="flex items-center bg-gray-100 rounded-md border border-gray-300">
        <button
          onClick={() =>
            onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
          }
          className="px-2 py-1 text-white hover:text-lime transition-colors duration-300"
        >
          -
        </button>
        <span className="px-2 text-white">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="px-2 py-1 text-white hover:text-lime transition-colors duration-300"
        >
          +
        </button>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700 transition-colors duration-300"
      >
        Remove
      </button>
    </div>
  </li>
);

// Project component adapted for the user dashboard
const Project = ({
  title,
  items,
  onRemove,
  onUpdateQuantity,
  onSelect,
  isSelected
}) => {
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`border-2 ${
        isSelected ? "border-lime" : "border-white"
      } rounded-lg p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-300`}
      onClick={() => onSelect(title)}
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-h2 font-semibold text-lime">{title}</h3>
        <span className="text-gray-500">({items.length} items)</span>
      </div>

      {isSelected &&
        (items.length === 0 ? (
          <div className="text-center py-4 text-gray-500">
            Your project is empty
          </div>
        ) : (
          <>
            <ul className="space-y-4 mb-6">
              {items.map((item) => (
                <ProjectItem
                  key={item.id}
                  item={item}
                  onRemove={onRemove}
                  onUpdateQuantity={onUpdateQuantity}
                />
              ))}
            </ul>
            <div className="flex justify-between items-center">
              <span className="font-medium text-white">Total:</span>
              <span className="text-lg font-bold text-white">{total} DKK</span>
            </div>
          </>
        ))}
    </div>
  );
};

// Projects Component for the user dashboard
const ProjectsComponent = () => {
  const [projectItems, setProjectItems] = useState({
    "Project 1": [
      { id: 1, name: "Allen & Heath SQ5 Mixer", price: 950, quantity: 1 }
    ],
    "Project 2": [
      { id: 2, name: "Shure SM58 Microphone", price: 150, quantity: 2 }
    ],
    "Project 3": [
      {
        id: 3,
        name: "Yamahullu 500SBC Airplane with 3 engines",
        price: 1000,
        quantity: 1
      }
    ],
    "Project 4": [
      {
        id: 4,
        name: "Yamahullu 500SBC Airplane with 3 engines",
        price: 1000,
        quantity: 1
      }
    ]
  });

  const [selectedProject, setSelectedProject] = useState("Project 1");

  const removeFromProject = (projectName, id) => {
    setProjectItems((prev) => ({
      ...prev,
      [projectName]: prev[projectName].filter((item) => item.id !== id)
    }));
  };

  const updateProjectQuantity = (projectName, id, newQuantity) => {
    setProjectItems((prev) => ({
      ...prev,
      [projectName]: prev[projectName].map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    }));
  };

  const handleProjectSelect = (projectName) => {
    setSelectedProject(projectName);
  };

  return (
    <div>
      <p className="text-lg mb-8">
        Get a quick overview of your different projects and their contents
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Projects Section (left) */}
        <div className="flex-1">
          <div className="space-y-6 max-h-96 overflow-y-auto pr-2">
            {Object.keys(projectItems).map((projectName) => (
              <Project
                key={projectName}
                title={projectName}
                items={projectItems[projectName]}
                onRemove={(id) => removeFromProject(projectName, id)}
                onUpdateQuantity={(id, qty) =>
                  updateProjectQuantity(projectName, id, qty)
                }
                onSelect={handleProjectSelect}
                isSelected={projectName === selectedProject}
              />
            ))}
          </div>
        </div>

        {/* Project Contents Section (right) */}
        <div className="flex-1 border-2 border-lime rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-h2 font-semibold text-lime">
              {selectedProject} Contents
            </h2>
            <span className="text-white">
              ({projectItems[selectedProject].length} items)
            </span>
          </div>

          {projectItems[selectedProject].length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              This project is empty
            </div>
          ) : (
            <ul className="space-y-4">
              {projectItems[selectedProject].map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center border-b border-gray-300 pb-2"
                >
                  <div>
                    <span className="font-medium text-white">{item.name}</span>
                    <span className="block text-gray-500">
                      {item.price} DKK
                    </span>
                    <span className="block text-gray-500">
                      Qty: {item.quantity}
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={() =>
                        removeFromProject(selectedProject, item.id)
                      }
                      className="text-red-500 hover:text-red-700 transition-colors duration-300"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Home component
export default function Home() {
  const [selectedOption, setSelectedOption] = useState("Dashboard");

  // Eksempeldata for ordrer
  const orders = [
    { id: "1001", date: "2025-03-15", status: "Delivered", total: "2500 DKK" },
    { id: "1002", date: "2025-03-10", status: "Processing", total: "1800 DKK" },
    { id: "1003", date: "2025-02-28", status: "Delivered", total: "3200 DKK" }
  ];

  // Eksempeldata for store credits
  const storeCredits = {
    totalEarned: "4500 DKK",
    available: "2100 DKK",
    history: [
      { date: "2025-03-10", amount: "500 DKK", reason: "Loyalitetsbonus" },
      {
        date: "2025-02-15",
        amount: "1200 DKK",
        reason: "Produktreturneringer"
      },
      { date: "2025-01-05", amount: "400 DKK", reason: "Anbefalingsbonus" }
    ]
  };

  // Menu options
  const menuOptions = [
    "Dashboard",
    "Orders",
    "Store Credits",
    "Downloads",
    "Address",
    "My Coupons",
    "My Wallet",
    "Account details",
    "VAT number",
    "Projects",
    "Logout"
  ];

  // Function to handle menu item click
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const [isEditing, setIsEditing] = useState(false);
  const [addressData, setAddressData] = useState({
    firstName: "John",
    lastName: "Doe",
    companyName: "",
    street: "Address 190 4,th",
    postcode: "2200",
    city: "København N",
    country: "Denmark",
    phone: "12345678",
    email: "john.doe@example.com"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Ændring i felt: ${name}, ny værdi: ${value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Gemmer adressedata:", addressData);
    setIsEditing(false);
  };

  // Specialized components for each section
  const DashBoardComponent = () => (
    <div>
      <div>
        <p>
          From your account dashboard you can view your recent orders, manage
          your billing address, and edit your password and account details.{" "}
        </p>
      </div>
    </div>
  );

  const OrdersComponent = () => (
    <div>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <div className="grid grid-cols-4 font-bold border-b pb-2 mb-2">
          <div>Order ID</div>
          <div>Order Date</div>
          <div>Status</div>
          <div>Total</div>
        </div>
        {orders.map((order) => (
          <div key={order.id} className="grid grid-cols-4 py-2 border-b">
            <div>{order.id}</div>
            <div>{order.date}</div>
            <div
              className={
                order.status === "Delivered"
                  ? "text-green-600"
                  : "text-yellow-600"
              }
            >
              {order.status}
            </div>
            <div>{order.total}</div>
          </div>
        ))}
      </div>
      <button className="px-4 py-2 bg-lime text-white rounded hover:bg-lime/80">
        View orders
      </button>
    </div>
  );

  const StoreCreditsComponent = () => (
    <div>
      <p className="font-bold">
        Store credit can be use to rent or buy items on this website
      </p>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600">Samlede optjente credits</div>
          <div className="text-2xl font-bold text-lime">
            {storeCredits.totalEarned}
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600">Tilgængelige credits</div>
          <div className="text-2xl font-bold text-lime">
            {storeCredits.available}
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Historik</h4>
        <div className="space-y-2">
          {storeCredits.history.map((item, index) => (
            <div key={index} className="flex justify-between border-b py-2">
              <div>
                <div className="font-medium">{item.date}</div>
                <div className="text-sm text-gray-600">{item.reason}</div>
              </div>
              <div className="font-bold">{item.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const DownloadsComponent = () => (
    <div className="flex justify-between">
      <div>
        <p className="text-white">No downloads available yet</p>
      </div>
      <div>
        <Link href="/src/app/pages/products">
          <button className="bg-lime px-7 py-2 rounded-lg text-black border-2 border-lime hover:bg-transparent hover:text-lime transition-all duration-300">
            Browse products
          </button>
        </Link>
      </div>
    </div>
  );

  const AddressComponent = () => (
    <div className="grid grid-cols-1 gap-6">
      <h3 className="text-gray-600">
        The following address will be used on the checkout page by default
      </h3>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h1 className="text-2xl font-bold mb-4">Edit Billing Address</h1>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium mb-1"
              >
                First name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={addressData.firstName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-lime focus:outline-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium mb-1"
              >
                Last name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={addressData.lastName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-lime focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-medium mb-1"
            >
              Company name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={addressData.companyName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-lime focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="street" className="block text-sm font-medium mb-1">
              Street *
            </label>
            <input
              type="text"
              id="street"
              name="street"
              value={addressData.street}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-lime focus:outline-none"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="postcode"
                className="block text-sm font-medium mb-1"
              >
                Postcode / ZIP *
              </label>
              <input
                type="text"
                id="postcode"
                name="postcode"
                value={addressData.postcode}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-lime focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium mb-1">
                Town / City *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={addressData.city}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-lime focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium mb-1">
              Country / Region *
            </label>
            <select
              id="country"
              name="country"
              value={addressData.country}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-lime focus:outline-none"
              required
            >
              <option value="">Select a country / region...</option>
              <option value="Denmark">Denmark</option>
              <option value="Sweden">Sweden</option>
              <option value="Norway">Norway</option>
              <option value="Germany">Germany</option>
              <option value="UK">United Kingdom</option>
            </select>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={addressData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-lime focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={addressData.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-lime focus:outline-none"
              required
            />
          </div>

          <div className="flex space-x-4 pt-2">
            <button
              type="submit"
              className="bg-lime px-7 py-2 rounded-lg text-black border-2 border-lime hover:bg-transparent hover:text-lime transition-all duration-300"
            >
              Save Address
            </button>

            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-7 py-2 rounded-lg text-black border-2 border-gray-300 hover:bg-gray-100 transition-all duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <div>
            <h1 className="text-2xl font-bold mb-4">Billing address</h1>
            <p>
              {addressData.firstName} {addressData.lastName}
            </p>
            {addressData.companyName && <p>{addressData.companyName}</p>}
            <p>{addressData.street}</p>
            <p>
              {addressData.postcode} {addressData.city}
            </p>
            <p>{addressData.country}</p>
            <p>Phone: {addressData.phone}</p>
            <p>Email: {addressData.email}</p>
          </div>

          <button
            onClick={() => setIsEditing(true)}
            className="bg-lime px-7 py-2 rounded-lg text-black border-2 border-lime hover:bg-transparent hover:text-lime transition-all duration-300 w-fit"
          >
            Edit Billing address
          </button>
        </>
      )}
    </div>
  );

  const MyWalletComponent = () => (
    <div className="flex space-x-8 items-center">
      {/* Left Column with wallet actions */}
      <div className="flex flex-col space-y-6">
        {/* Wallet Topup Button */}
        <div className="flex flex-col items-center cursor-pointer hover:bg-lime-100 px-6 py-4 rounded-lg border-2 border-lime transition-all duration-300 hover:scale-105">
          <p className="text-lime font-semibold mb-2">Wallet Topup</p>
          <FaCirclePlus className="text-lime text-3xl" />
        </div>

        {/* Transactions Button */}
        <div className="flex flex-col items-center cursor-pointer hover:bg-lime-100 px-6 py-4 rounded-lg border-2 border-lime transition-all duration-300 hover:scale-105">
          <p className="text-lime font-semibold mb-2">Transactions</p>
          <BiSolidSpreadsheet className="text-lime text-3xl" />
        </div>
      </div>

      {/* Divider line */}
      <div className="w-px bg-red-500 h-full"></div>

      {/* Right Column with Balance */}
      <div className="flex flex-col justify-start">
        <h1 className="font-bold text-xl mt-6 ml-12">Balance</h1>

        {/* Add balance details here */}
      </div>
    </div>
  );

  const AccountDetailsComponent = () => {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      displayName: "",
      email: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form data submitted:", formData);
    };

    return (
      <div className="max-w-xl mx-auto">
        <h1 className="font-bold text-xl mb-6">Kontooplysninger</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personlige oplysninger */}
          <div className="space-y-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium mb-1"
              >
                First name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
                required
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium mb-1"
              >
                Last name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
                required
              />
            </div>

            <div>
              <label
                htmlFor="displayName"
                className="block text-sm font-medium mb-1"
              >
                Display name *
              </label>
              <input
                type="text"
                id="displayName"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                This will be how your name will be displayed in the account
                section and in reviews
              </p>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email adresss *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
                required
              />
            </div>
          </div>

          {/* Password change */}
          <div className="pt-6 border-t border-gray-200">
            <h2 className="font-semibold text-lg mb-4">Skift adgangskode</h2>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="currentPassword"
                  className="block text-sm font-medium mb-1"
                >
                  Current password (leave blank to leave unchanged)
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
                />
              </div>

              <div>
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium mb-1"
                >
                  New password (leave blank to leave unchanged)
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium mb-1"
                >
                  Confirm new password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
                />
              </div>
            </div>
          </div>

          {/* Save changes button */}
          <div className="pt-6">
            <button
              type="submit"
              className="bg-lime px-7 py-2 rounded-lg text-black border-2 border-lime hover:bg-transparent hover:text-lime transition-all duration-300"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    );
  };

  const VatNumberComponent = () => (
    <div className="flex flex-col items-center justify-start p-4 space-y-4 rounded-lg shadow">
      <h3 className="text-lg font-medium">Vat Number</h3>
      <input
        type="text"
        placeholder="Enter VAT number"
        className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime"
      />
      <button className="bg-lime px-7 py-2 rounded-lg text-black border-2 border-lime hover:bg-transparent hover:text-lime transition-all duration-300">
        Save
      </button>
    </div>
  );

  const LogoutComponent = () => (
    <div className="flex flex-col justify-center items-center max-w-[240px] mx-auto gap-8 h-full">
      <h1 className="text-center">Are you sure you wanna logout?</h1>
      <button className="bg-lime px-7 py-2 rounded-lg text-black border-2 border-lime hover:bg-transparent hover:text-lime transition-all duration-300">
        Logout
      </button>
    </div>
  );

  // Content renderer based on selected option
  const renderContent = () => {
    switch (selectedOption) {
      case "Dashboard":
        return <DashBoardComponent />;
      case "Orders":
        return <OrdersComponent />;
      case "Store Credits":
        return <StoreCreditsComponent />;
      case "Downloads":
        return <DownloadsComponent />;
      case "Address":
        return <AddressComponent />;
      case "My Coupons":
        return <div>Noget med coupons</div>;
      case "My Wallet":
        return <MyWalletComponent />;
      case "Account details":
        return <AccountDetailsComponent />;
      case "VAT number":
        return <VatNumberComponent />;
      case "Projects":
        return <ProjectsComponent />;
      case "Logout":
        return <LogoutComponent />;
    }
  };

  return (
    <div className="grid grid-cols-12 gap-6 m-12 mt-20">
      {/* Left sidebar with menu */}
      <div className="col-span-3 ml-12">
        <h2 className="font-bold text-xl mb-4">Hello User</h2>
        <ul className="space-y-3">
          {menuOptions.map((option) => (
            <li
              key={option}
              className={`cursor-pointer hover:text-lime transition-colors ${
                selectedOption === option ? "font-bold text-lime" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>

      {/* Main content area */}
      <div className="col-span-9">{renderContent()}</div>
    </div>
  );
}
