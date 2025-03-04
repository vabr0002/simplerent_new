"use client";

import React, { useState } from 'react';

const CookiePolicyPage = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [activeCategory, setActiveCategory] = useState('necessary');

    const toggleSection = (sectionId) => {
        setActiveSection(activeSection === sectionId ? null : sectionId);
    };

    const cookieCategories = ['necessary', 'functional', 'performance', 'analytics', 'advertisement', 'others'];

    const cookieData = {
        necessary: [
            { name: 'PHPSESSID', duration: 'session', description: "This cookie is native to PHP applications. The cookie is used to store and identify a users' unique session ID for the purpose of managing user session on the website. The cookie is a session cookies and is deleted when all the browser windows are closed." },
            { name: 'AWSALBCORS', duration: '7 days', description: "This cookie is managed by Amazon Web Services and is used for load balancing." },
            { name: 'CookieLawInfoConsent', duration: '1 year', description: "Records the default button state of the corresponding category & the status of CCPA. It works only in coordination with the primary cookie." },
            { name: 'cookielawinfo-checkbox-advertisement', duration: '1 year', description: "Set by the GDPR Cookie Consent plugin, this cookie is used to record the user consent for the cookies in the \"Advertisement\" category." },
            { name: 'ASP.NET_SessionId', duration: 'session', description: "Issued by Microsoft's ASP.NET Application, this cookie stores session data during a user's website visit." },
            { name: 'viewed_cookie_policy', duration: '11 months', description: "The cookie is set by the GDPR Cookie Consent plugin and is used to store whether or not user has consented to the use of cookies. It does not store any personal data." },
            { name: 'cookielawinfo-checkbox-necessary', duration: '11 months', description: "This cookie is set by GDPR Cookie Consent plugin. The cookies is used to store the user consent for the cookies in the category \"Necessary\"." },
            { name: 'cookielawinfo-checkbox-functional', duration: '11 months', description: "The cookie is set by GDPR cookie consent to record the user consent for the cookies in the category \"Functional\"." },
            { name: 'cookielawinfo-checkbox-performance', duration: '11 months', description: "This cookie is set by GDPR Cookie Consent plugin. The cookie is used to store the user consent for the cookies in the category \"Performance\"." },
            { name: 'cookielawinfo-checkbox-analytics', duration: '11 months', description: "This cookie is set by GDPR Cookie Consent plugin. The cookie is used to store the user consent for the cookies in the category \"Analytics\"." },
            { name: 'cookielawinfo-checkbox-others', duration: '11 months', description: "This cookie is set by GDPR Cookie Consent plugin. The cookie is used to store the user consent for the cookies in the category \"Other\"." },
        ],
        functional: [
            { name: 'mailchimp_landing_site', duration: '1 month', description: "The cookie is set by MailChimp to record which page the user first visited." },
            { name: '__cf_bm', duration: '30 minutes', description: "This cookie, set by Cloudflare, is used to support Cloudflare Bot Management." },
            { name: 'aka_debug', duration: 'session', description: "Vimeo sets this cookie which is essential for the website to play video functionality." },
        ],
        performance: [
            { name: 'AWSALB', duration: '7 days', description: "AWSALB is an application load balancer cookie set by Amazon Web Services to map the session to the target." },
        ],
        analytics: [
            { name: 'tk_or', duration: '1 year 1 month 4 days', description: "The tk_or is a referral cookie set by the JetPack plugin on sites using WooCommerce, which analyzes referrer behaviour for Jetpack." },
            { name: 'tk_r3d', duration: '3 days', description: "JetPack installs this cookie to collect internal metrics for user activity and in turn improve user experience." },
            { name: 'tk_lr', duration: '1 year', description: "The tk_lr is a referral cookie set by the JetPack plugin on sites using WooCommerce, which analyzes referrer behaviour for Jetpack." },
            { name: '_swa_u', duration: '1 year 1 month 4 days', description: "This cookie is set by SiteWit and is used for stats report and analytics." },
            { name: 'tk_tc', duration: 'session', description: "JetPack sets this cookie to record details on how users use the website." },
            { name: 'vuid', duration: '1 year 1 month 4 days', description: "Vimeo installs this cookie to collect tracking information by setting a unique ID to embed videos to the website." },
            { name: 'CONSENT', duration: '2 years', description: "YouTube sets this cookie via embedded youtube-videos and registers anonymous statistical data." },
            { name: 'tk_ai', duration: '1 year 1 month 4 days', description: "JetPack sets this cookie to store a randomly-generated anonymous ID which is used only within the admin area and for general analytics tracking." },
            { name: 'tk_qs', duration: '30 minutes', description: "JetPack sets this cookie to store a randomly-generated anonymous ID which is used only within the admin area and for general analytics tracking." },
        ],
        advertisement: [
            { name: '_fbp', duration: '3 months', description: "This cookie is set by Facebook to display advertisements when either on Facebook or on a digital platform powered by Facebook advertising, after visiting the website." },
            { name: 'YSC', duration: 'session', description: "YSC cookie is set by Youtube and is used to track the views of embedded videos on Youtube pages." },
            { name: 'VISITOR_INFO1_LIVE', duration: '5 months 27 days', description: "A cookie set by YouTube to measure bandwidth that determines whether the user gets the new or old player interface." },
            { name: 'test_cookie', duration: '15 minutes', description: "The test_cookie is set by doubleclick.net and is used to determine if the user's browser supports cookies." },
            { name: 'yt-remote-device-id', duration: 'never', description: "YouTube sets this cookie to store the video preferences of the user using embedded YouTube video." },
            { name: 'yt-remote-connected-devices', duration: 'never', description: "YouTube sets this cookie to store the video preferences of the user using embedded YouTube video." },
            { name: 'yt.innertube::requests', duration: 'never', description: "This cookie, set by YouTube, registers a unique ID to store data on what videos from YouTube the user has seen." },
            { name: 'yt.innertube::nextId', duration: 'never', description: "This cookie, set by YouTube, registers a unique ID to store data on what videos from YouTube the user has seen." },
            { name: 'IDE', duration: '1 year 24 days', description: "Google DoubleClick IDE cookies are used to store information about how the user uses the website to present them with relevant ads and according to the user profile." },
            { name: 'fr', duration: '3 months', description: "Facebook sets this cookie to show relevant advertisements to users by tracking user behaviour across the web, on sites that have Facebook pixel or Facebook social plugin." },
        ],
        others: [
            { name: 'wp_woocommerce_session_6edf9f624d0829ca2dc9d1f7df528002', duration: '2 days', description: "No description" },
            { name: 'cookies.js', duration: 'session', description: "No description available." },
        ],
    };

    const sections = [
        {
            id: 'about',
            title: '1. About this Cookie Policy',
            content: (
                <>
                    <p className="text-lg leading-relaxed mb-4">
                        This Cookie Policy explains what cookies are and how we use them. You should read this policy to understand what cookies are, how we use them, the types of cookies we use i.e, the information we collect using cookies and how that information is used and how to control the cookie preferences.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        For further information on how we use, store and keep your personal data secure, see our <a href="/privacy" className="text-lime-400 hover:text-lime-300 hover:underline">Privacy Policy</a>.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        You can at any time change or withdraw your consent from the Cookie Declaration on our website.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Your consent applies to the following domains: simplerent.dk
                    </p>
                </>
            )
        },
        {
            id: 'what-are-cookies',
            title: '2. What are Cookies?',
            content: (
                <p className="text-lg leading-relaxed">
                    Cookies are small text files that are used to store small pieces of information. The cookies are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make the website more secure, provide better user experience, and understand how the website performs and to analyze what works and where it needs improvement.
                </p>
            )
        },
        {
            id: 'how-we-use-cookies',
            title: '3. How do we use Cookies?',
            content: (
                <>
                    <p className="text-lg leading-relaxed mb-4">
                        As most of the online services, our website uses cookies first-party and third-party cookies for a number of purposes. The first-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data.
                    </p>
                    <p className="text-lg leading-relaxed">
                        The third-party cookies used on our websites are used mainly for understanding how the website performs, how you interact with our website, keeping our services secure, providing advertisements that are relevant to you, and all in all providing you with a better and improved user experience and help speed up your future interactions with our website.
                    </p>
                </>
            )
        },
        {
            id: 'types-of-cookies',
            title: '4. Types of Cookies we use',
            content: (
                <>
                    <p className="text-lg leading-relaxed mb-6">
                        The cookies used on our website are grouped into the following categories:
                    </p>
                    
                    <div className="mb-8">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {cookieCategories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 rounded-lg capitalize font-medium transition-colors ${
                                        activeCategory === category
                                            ? 'bg-lime-500 text-lime'
                                            : 'bg-gray-800 text-white hover:bg-gray-700'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6">
                            <h3 className="text-xl font-bold mb-4 capitalize">{activeCategory} Cookies</h3>
                            
                            {activeCategory === 'necessary' && (
                                <p className="text-lg mb-6">
                                    Necessary cookies are absolutely essential for the website to function properly. These cookies ensure basic functionalities and security features of the website, anonymously.
                                </p>
                            )}
                            
                            {activeCategory === 'functional' && (
                                <p className="text-lg mb-6">
                                    Functional cookies help to perform certain functionalities like sharing the content of the website on social media platforms, collect feedbacks, and other third-party features.
                                </p>
                            )}
                            
                            {activeCategory === 'performance' && (
                                <p className="text-lg mb-6">
                                    Performance cookies are used to understand and analyze the key performance indexes of the website which helps in delivering a better user experience for the visitors.
                                </p>
                            )}
                            
                            {activeCategory === 'analytics' && (
                                <p className="text-lg mb-6">
                                    Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics the number of visitors, bounce rate, traffic source, etc.
                                </p>
                            )}
                            
                            {activeCategory === 'advertisement' && (
                                <p className="text-lg mb-6">
                                    Advertisement cookies are used to provide visitors with relevant ads and marketing campaigns. These cookies track visitors across websites and collect information to provide customized ads.
                                </p>
                            )}
                            
                            {activeCategory === 'others' && (
                                <p className="text-lg mb-6">
                                    Other uncategorized cookies are those that are being analyzed and have not been classified into a category as yet.
                                </p>
                            )}
                            
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-gray-900">
                                            <th className="text-left p-4 border border-gray-700">Cookie</th>
                                            <th className="text-left p-3 border border-gray-700">Duration</th>
                                            <th className="text-left p-3 border border-gray-700">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cookieData[activeCategory].map((cookie, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-800 bg-opacity-30' : 'bg-gray-800 bg-opacity-50'}>
                                                <td className="p-3 border border-gray-700 font-medium">{cookie.name}</td>
                                                <td className="p-3 border border-gray-700">{cookie.duration}</td>
                                                <td className="p-3 border border-gray-700">{cookie.description}</td>
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
            id: 'cookie-control',
            title: '5. How can I control Cookie preferences?',
            content: (
                <>
                    <p className="text-lg leading-relaxed mb-4">
                        You can manage your cookies preferences by clicking on the "Settings" button and enabling or disabling the cookie categories on the popup according to your preferences.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        Should you decide to change your preferences later through your browsing session, you can click on the "Manage consent" tab on your screen. This will display the consent notice again enabling you to change your preferences or withdraw your consent entirely.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        In addition to this, different browsers provide different methods to block and delete cookies used by websites. You can change the settings of your browser to block/delete the cookies. To find out more out more on how to manage and delete cookies, visit <a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:text-lime-300 hover:underline">wikipedia.org</a>, <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:text-lime-300 hover:underline">www.allaboutcookies.org</a>.
                    </p>
                    
                    <div className="flex justify-center mt-8">
                        <button className="bg-lime-500 hover:bg-lime-600 text-black font-bold py-3 px-6 rounded-lg transition-colors mr-4">
                            Accept All Cookies
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                            Manage Cookie Preferences
                        </button>
                    </div>
                </>
            )
        }
    ];

    return (
        <div className="bg-black text-white min-h-screen font-sans mt-top-spacing">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-gray-900 to-black py-16 px-6 md:px-20 lg:px-40">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
                <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
                    At SimpleRent ApS, we use cookies to enhance your browsing experience and provide you with personalized service. 
                    This policy explains what cookies are, how we use them, and how you can manage your cookie preferences.
                </p>
                
                <div className="bg-gray-800 p-4 rounded-lg mt-8 flex items-center">
                    <div className="mr-4 p-2 bg-lime-500 rounded-full text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p className="text-sm md:text-base">
                        <span className="font-bold">Your current state:</span> Consent accepted. Allowed cookies (Necessary, Functional, Performance, Analytics, Others). Not allowed cookies (Advertisement).
                    </p>
                </div>
            </div>

            {/* Table of Contents */}
            <div className="py-8 px-6 md:px-20 lg:px-40 bg-gray-900">
                <h2 className="text-2xl font-bold mb-6">Contents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sections.map((section) => (
                        <a 
                            key={section.id}
                            href={`#${section.id}`}
                            className="text-lime hover:text-lime hover:underline transition-colors"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(section.id).scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            {section.title}
                        </a>
                    ))}
                </div>
            </div>

            {/* Content Sections */}
            <div className="py-12 px-6 md:px-20 lg:px-40">
                {sections.map((section) => (
                    <div 
                        key={section.id} 
                        id={section.id}
                        className="mb-16 scroll-mt-24"
                    >
                        <div 
                            className="flex items-center justify-between bg-gray-800 p-4 rounded-t-lg cursor-pointer"
                            onClick={() => toggleSection(section.id)}
                        >
                            <h2 className="text-2xl font-bold">{section.title}</h2>
                            <span className="text-2xl">
                                {activeSection === section.id ? '−' : '+'}
                            </span>
                        </div>
                        <div className={`bg-gray-800 bg-opacity-50 p-8 rounded-b-lg transition-all duration-500 ${
                            activeSection === section.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                        }`}>
                            {section.content}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="py-8 px-6 md:px-20 lg:px-40 bg-gray-900 text-center">
                <p className="text-gray-400">
                    © {new Date().getFullYear()} SimpleRent ApS. All rights reserved.
                </p>
                <p className="text-gray-400 mt-2">
                    Last updated: March 2025
                </p>
            </div>
        </div>
    );
};

export default CookiePolicyPage;