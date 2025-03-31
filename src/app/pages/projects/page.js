"use client";
import Image from "next/image";
import { useState } from "react";

// Individual item inside a project
const ProjectItem = ({ item, onRemove, onUpdateQuantity }) => (
  <li className="flex justify-between items-center py-2 border-b border-gray-300">
    <div>
      <span className="font-medium text-white">{item.name}</span>
      <span className="block text-gray-500 text-sm">{item.price} DKK</span>
    </div>
    <div className="flex items-center space-x-4">
      {/* Quantity controls */}
      <div className="flex items-center bg-gray-100 rounded-md border border-gray-300">
        <button
          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
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

      {/* Remove item */}
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700 transition-colors duration-300"
      >
        Remove
      </button>
    </div>
  </li>
);

// Component for a single project
const Project = ({
  title,
  items,
  onRemove,
  onUpdateQuantity,
  onSelect,
  isSelected
}) => {
  // Calculate total project price
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div
      className={`border-2 ${
        isSelected ? "border-lime" : "border-white"
      } rounded-lg p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-300`}
      onClick={() => onSelect(title)}
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-h2 font-semibold text-lime text-center">{title}</h3>
        <span className="text-gray-500">({items.length} items)</span>
      </div>

      {/* Show contents if selected */}
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

            {/* Total price */}
            <div className="flex justify-between items-center">
              <span className="font-medium text-white">Total:</span>
              <span className="text-lg font-bold text-white">{total} DKK</span>
            </div>
          </>
        ))}
    </div>
  );
};

// Main component rendering all projects and selected project details
export default function Home() {
  // Sample project data
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

  // Currently selected project
  const [selectedProject, setSelectedProject] = useState("Project 1");

  // Remove item from a project
  const removeFromProject = (projectName, id) => {
    setProjectItems((prev) => ({
      ...prev,
      [projectName]: prev[projectName].filter((item) => item.id !== id)
    }));
  };

  // Update item quantity in a project
  const updateProjectQuantity = (projectName, id, newQuantity) => {
    setProjectItems((prev) => ({
      ...prev,
      [projectName]: prev[projectName].map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    }));
  };

  // Change selected project
  const handleProjectSelect = (projectName) => {
    setSelectedProject(projectName);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 my-12">
      <h2 className="text-h1 text-lime flex justify-center m-top-spacing mb-32">
        Projects
      </h2>
      <p className="text-h3 flex justify-center my-14">
        Get a quick overview of your different projects and their contents
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side: scrollable list of projects */}
        <div className="flex-1">
          <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2">
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

        {/* Right side: details of selected project */}
        <div className="flex-1 border-2 border-lime rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-h2 font-semibold text-lime text-center">
              {selectedProject} Contents
            </h2>
            <span className="text-white">
              ({projectItems[selectedProject].length} items)
            </span>
          </div>

          {/* If empty */}
          {projectItems[selectedProject].length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              This project is empty
            </div>
          ) : (
            // Show item list
            <ul className="space-y-4">
              {projectItems[selectedProject].map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center border-b border-gray-300 pb-2"
                >
                  <div>
                    <span className="font-medium text-white">{item.name}</span>
                    <span className="block text-gray-500">{item.price} DKK</span>
                    <span className="block text-gray-500">Qty: {item.quantity}</span>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => removeFromProject(selectedProject, item.id)}
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
}