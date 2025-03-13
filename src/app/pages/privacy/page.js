"use client";
import React, { useState } from "react";

const PrivacyPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  const sections = [
    {
      id: "data-controller",
      title: "1. Data Controller",
      content: (
        <>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            SimpleRent ApS is the controller of the personal data collected
            through our website. Our contact details are:
          </p>
          <div className="bg-gray-900 p-4 rounded-lg mb-4">
            <p className="text-base md:text-lg font-semibold">
              SimpleRent ApS <br />
              Jernholmen 2, 2650 Hvidovre <br />
              Email:{" "}
              <a
                href="mailto:hello@simplerent.dk"
                className="text-lime hover:underline"
              >
                hello@simplerent.dk
              </a>
            </p>
          </div>
        </>
      )
    },
    {
      id: "information-collected",
      title: "2. Information We Collect",
      content: (
        <>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            We collect information that you provide directly to us when you use
            our services, including but not limited to:
          </p>
          <ul className="list-disc list-inside text-base md:text-lg mb-4 pl-4">
            <li className="mb-2">Name</li>
            <li className="mb-2">
              Contact information (such as email address, phone number)
            </li>
            <li className="mb-2">Address</li>
            <li className="mb-2">
              Payment information reference (no card data is saved on our site)
            </li>
            <li className="mb-2">
              Other information relevant to the services we provide
            </li>
          </ul>
          <p className="text-base md:text-lg leading-relaxed">
            We may also collect data automatically through cookies and similar
            technologies, regarding your use of our website, such as IP address,
            browser type, and visit duration.
          </p>
        </>
      )
    },
    {
      id: "use-of-information",
      title: "3. Use of Information",
      content: (
        <>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            The information we collect is used to:
          </p>
          <ul className="list-disc list-inside text-base md:text-lg mb-2 pl-4">
            <li className="mb-2">
              Provide, maintain, and improve our services
            </li>
            <li className="mb-2">
              Process transactions and send related information
            </li>
            <li className="mb-2">
              Respond to inquiries and provide customer support
            </li>
            <li className="mb-2">Comply with legal obligations</li>
            <li className="mb-2">
              Analyze and monitor website usage for improvements
            </li>
            <li className="mb-2">
              Send promotional communications, in compliance with your
              preferences
            </li>
          </ul>
        </>
      )
    },
    {
      id: "sharing-of-information",
      title: "4. Sharing of Information",
      content: (
        <>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            We do not share your personal information with third parties, except
            as necessary to provide our services, comply with the law, or
            protect our rights. This may include sharing information with:
          </p>
          <ul className="list-disc list-inside text-base md:text-lg mb-2 pl-4">
            <li className="mb-2">
              Service providers acting as processors who provide IT and system
              administration services
            </li>
            <li className="mb-2">
              Professional advisers including lawyers, auditors, and insurers
            </li>
            <li className="mb-2">
              Government or regulatory bodies as required by law
            </li>
          </ul>
        </>
      )
    },
    {
      id: "data-retention",
      title: "5. Data Retention",
      content: (
        <p className="text-base md:text-lg leading-relaxed">
          We retain your personal information for as long as necessary to
          provide the services you have requested and for legal or tax purposes.
        </p>
      )
    },
    {
      id: "your-rights",
      title: "6. Your Rights",
      content: (
        <>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Under the GDPR, you have rights regarding your personal data,
            including:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-base md:text-lg mb-4 pl-4">
            <li className="bg-gray-900 p-3 rounded-lg">
              ✓ The right to access
            </li>
            <li className="bg-gray-900 p-3 rounded-lg">
              ✓ The right to rectification
            </li>
            <li className="bg-gray-900 p-3 rounded-lg">
              ✓ The right to erasure
            </li>
            <li className="bg-gray-900 p-3 rounded-lg">
              ✓ The right to restrict processing
            </li>
            <li className="bg-gray-900 p-3 rounded-lg">
              ✓ The right to data portability
            </li>
            <li className="bg-gray-900 p-3 rounded-lg">
              ✓ The right to object to processing
            </li>
            <li className="bg-gray-900 p-3 rounded-lg md:col-span-2">
              ✓ The right to withdraw consent
            </li>
          </ul>
          <p className="text-base md:text-lg leading-relaxed">
            To exercise these rights, please{" "}
            <a
              href="mailto:hello@simplerent.dk"
              className="text-lime hover:underline"
            >
              contact us
            </a>{" "}
            using the contact information provided.
          </p>
        </>
      )
    },
    {
      id: "data-security",
      title: "7. Data Security",
      content: (
        <p className="text-base md:text-lg leading-relaxed">
          We implement appropriate technical and organizational measures to
          protect personal data against unauthorized or unlawful processing,
          accidental loss, destruction, or damage.
        </p>
      )
    },
    {
      id: "changes-to-policy",
      title: "8. Changes to This Privacy Policy",
      content: (
        <p className="text-base md:text-lg leading-relaxed">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new policy on this page.
        </p>
      )
    },
    {
      id: "contact-us",
      title: "9. Contact Us",
      content: (
        <div className="bg-gray-900 p-4 md:p-6 rounded-lg inline-block">
          <p className="text-base md:text-lg font-semibold">
            SimpleRent ApS <br />
            Jernholmen 2, 2650 Hvidovre <br />
            Email:{" "}
            <a
              href="mailto:hello@simplerent.dk"
              className="text-lime hover:underline"
            >
              hello@simplerent.dk
            </a>
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black py-12 px-4 md:px-20 lg:px-40">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center">
          At SimpleRent ApS, we are committed to protecting the privacy and
          security of our users. This Privacy Policy outlines the types of
          personal information we collect, how it’s used, and the measures we
          take to protect it. This policy is designed to comply with the General
          Data Protection Regulation (GDPR) and Danish data protection laws.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="py-8 px-4 md:px-20 lg:px-40 bg-gray-900">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
          Contents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-lime hover:text-lime-300 hover:underline transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(section.id)
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              {section.title}
            </a>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-12 px-4 md:px-20 lg:px-40">
        {sections.map((section) => (
          <div key={section.id} id={section.id} className="mb-12 scroll-mt-24">
            <div
              className="flex items-center justify-between bg-gray-800 p-4 rounded-t-lg cursor-pointer"
              onClick={() => toggleSection(section.id)}
            >
              <h2 className="text-lg md:text-2xl font-bold">{section.title}</h2>
              <span className="text-xl md:text-2xl">
                {activeSection === section.id ? "−" : "+"}
              </span>
            </div>
            <div
              className={`bg-gray-800 bg-opacity-50 p-4 md:p-6 rounded-b-lg transition-all duration-300 ${
                activeSection === section.id
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {section.content}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="py-8 px-4 md:px-20 lg:px-40 bg-gray-900 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} SimpleRent ApS. All rights reserved.
        </p>
        <p className="text-gray-400 mt-2">Last updated: March 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPage;
