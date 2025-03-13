"use client";
import React, { useState } from "react";

const CookiePolicyPage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeCategory, setActiveCategory] = useState("necessary");

  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  const cookieCategories = [
    "necessary",
    "functional",
    "performance",
    "analytics",
    "advertisement",
    "others"
  ];

  const cookieData = {
    // Samme cookie-data som før, udeladt her for korthed
    necessary: [
      /* ... */
    ],
    functional: [
      /* ... */
    ],
    performance: [
      /* ... */
    ],
    analytics: [
      /* ... */
    ],
    advertisement: [
      /* ... */
    ],
    others: [
      /* ... */
    ]
  };

  const sections = [
    {
      id: "about",
      title: "1. About this Cookie Policy",
      content: (
        <>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            This Cookie Policy explains what cookies are and how we use them.
            You should read this policy to understand what cookies are, how we
            use them, the types of cookies we use i.e, the information we
            collect using cookies and how that information is used and how to
            control the cookie preferences.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            For further information on how we use, store and keep your personal
            data secure, see our{" "}
            <a
              href="/privacy"
              className="text-lime-400 hover:text-lime-300 hover:underline"
            >
              Privacy Policy
            </a>
            .
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            You can at any time change or withdraw your consent from the Cookie
            Declaration on our website.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Your consent applies to the following domains: simplerent.dk
          </p>
        </>
      )
    },
    {
      id: "what-are-cookies",
      title: "2. What are Cookies?",
      content: (
        <p className="text-base md:text-lg leading-relaxed">
          Cookies are small text files that are used to store small pieces of
          information. The cookies are stored on your device when the website is
          loaded on your browser. These cookies help us make the website
          function properly, make the website more secure, provide better user
          experience, and understand how the website performs and to analyze
          what works and where it needs improvement.
        </p>
      )
    },
    {
      id: "how-we-use-cookies",
      title: "3. How do we use Cookies?",
      content: (
        <>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            As most of the online services, our website uses cookies first-party
            and third-party cookies for a number of purposes. The first-party
            cookies are mostly necessary for the website to function the right
            way, and they do not collect any of your personally identifiable
            data.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            The third-party cookies used on our websites are used mainly for
            understanding how the website performs, how you interact with our
            website, keeping our services secure, providing advertisements that
            are relevant to you, and all in all providing you with a better and
            improved user experience and help speed up your future interactions
            with our website.
          </p>
        </>
      )
    },
    {
      id: "types-of-cookies",
      title: "4. Types of Cookies we use",
      content: (
        <>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            The cookies used on our website are grouped into the following
            categories:
          </p>

          <div className="mb-8">
            <div className="flex flex-wrap gap-3 md:gap-4 mb-6">
              {cookieCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg capitalize font-medium text-sm md:text-base transition-colors ${
                    activeCategory === category
                      ? "bg-lime-500 text-black"
                      : "bg-gray-800 text-white hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-4 capitalize">
                {activeCategory} Cookies
              </h3>

              {activeCategory === "necessary" && (
                <p className="text-base md:text-lg mb-6">
                  Necessary cookies are absolutely essential for the website to
                  function properly. These cookies ensure basic functionalities
                  and security features of the website, anonymously.
                </p>
              )}
              {activeCategory === "functional" && (
                <p className="text-base md:text-lg mb-6">
                  Functional cookies help to perform certain functionalities
                  like sharing the content of the website on social media
                  platforms, collect feedbacks, and other third-party features.
                </p>
              )}
              {activeCategory === "performance" && (
                <p className="text-base md:text-lg mb-6">
                  Performance cookies are used to understand and analyze the key
                  performance indexes of the website which helps in delivering a
                  better user experience for the visitors.
                </p>
              )}
              {activeCategory === "analytics" && (
                <p className="text-base md:text-lg mb-6">
                  Analytical cookies are used to understand how visitors
                  interact with the website. These cookies help provide
                  information on metrics the number of visitors, bounce rate,
                  traffic source, etc.
                </p>
              )}
              {activeCategory === "advertisement" && (
                <p className="text-base md:text-lg mb-6">
                  Advertisement cookies are used to provide visitors with
                  relevant ads and marketing campaigns. These cookies track
                  visitors across websites and collect information to provide
                  customized ads.
                </p>
              )}
              {activeCategory === "others" && (
                <p className="text-base md:text-lg mb-6">
                  Other uncategorized cookies are those that are being analyzed
                  and have not been classified into a category as yet.
                </p>
              )}

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-gray-900">
                      <th className="text-left p-2 md:p-4 border border-gray-700">
                        Cookie
                      </th>
                      <th className="text-left p-2 md:p-3 border border-gray-700">
                        Duration
                      </th>
                      <th className="text-left p-2 md:p-3 border border-gray-700">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieData[activeCategory].map((cookie, index) => (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0
                            ? "bg-gray-800 bg-opacity-30"
                            : "bg-gray-800 bg-opacity-50"
                        }
                      >
                        <td className="p-2 md:p-3 border border-gray-700 font-medium">
                          {cookie.name}
                        </td>
                        <td className="p-2 md:p-3 border border-gray-700">
                          {cookie.duration}
                        </td>
                        <td className="p-2 md:p-3 border border-gray-700">
                          {cookie.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      id: "cookie-control",
      title: "5. How can I control Cookie preferences?",
      content: (
        <>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            You can manage your cookies preferences by clicking on the
            "Settings" button and enabling or disabling the cookie categories on
            the popup according to your preferences.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Should you decide to change your preferences later through your
            browsing session, you can click on the "Manage consent" tab on your
            screen. This will display the consent notice again enabling you to
            change your preferences or withdraw your consent entirely.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            In addition to this, different browsers provide different methods to
            block and delete cookies used by websites. You can change the
            settings of your browser to block/delete the cookies. To find out
            more out more on how to manage and delete cookies, visit{" "}
            <a
              href="https://www.wikipedia.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-400 hover:text-lime-300 hover:underline"
            >
              wikipedia.org
            </a>
            ,{" "}
            <a
              href="https://www.allaboutcookies.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-400 hover:text-lime-300 hover:underline"
            >
              www.allaboutcookies.org
            </a>
            .
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button className="bg-lime-500 text-black border-2 border-lime font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg transition-all duration-300 hover:bg-transparent hover:text-lime">
              Accept All Cookies
            </button>
            <button className="bg-gray-700 text-white border-2 border-gray-700 font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg transition-all duration-300 hover:bg-transparent hover:text-gray-400">
              Manage Cookie Preferences
            </button>
          </div>
        </>
      )
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black py-12 px-4 md:px-20 lg:px-40">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
          Cookie Policy
        </h1>
        <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center">
          At SimpleRent ApS, we use cookies to enhance your browsing experience
          and provide you with personalized service. This policy explains what
          cookies are, how we use them, and how you can manage your cookie
          preferences.
        </p>

        <div className="bg-gray-800 p-4 rounded-lg mt-6 max-w-2xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="p-2 bg-lime-500 rounded-full text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-sm md:text-base">
              <span className="font-bold">Your current state:</span> Consent
              accepted. Allowed cookies (Necessary, Functional, Performance,
              Analytics, Others). Not allowed cookies (Advertisement).
            </p>
          </div>
        </div>
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
              className={`bg-gray-800 bg-opacity-50 p-4 md:p-8 rounded-b-lg transition-all duration-500 ${
                activeSection === section.id
                  ? "max-h-[2000px] opacity-100"
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

export default CookiePolicyPage;
