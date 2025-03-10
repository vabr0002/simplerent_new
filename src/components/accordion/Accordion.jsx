"use client";
import React, { useState, useRef, useEffect } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [contentHeights, setContentHeights] = useState([]);
  const contentRefs = useRef([]);

  // Calculate content heights when component mounts or when window resizes
  useEffect(() => {
    const updateContentHeights = () => {
      const newHeights = contentRefs.current.map((ref) =>
        ref ? ref.scrollHeight : 0
      );
      setContentHeights(newHeights);
    };

    // Initial calculation
    updateContentHeights();

    // Update on window resize
    window.addEventListener("resize", updateContentHeights);

    // Cleanup
    return () => window.removeEventListener("resize", updateContentHeights);
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    {
      trigger: "Hi!",
      info: (
        <>
          Great to have you here!
          <br />
          When you book at Simplerent.dk
          <br />
          We try to keep everything as simple as possible! (pun intended..)
          <br />
          <br />
          We have collected all the important info on how it works booking with
          us.
          <br />
          Have a look below here and contact us if you have any questions.
        </>
      ),
    },
    {
      trigger: "Opening hours",
      info: (
        <>
          Our website is open for bookings 24/7!
          <br />
          <br />
          Office hours are:
          <br />
          Mon-Fri 9.00-16.30
          <br />
          Weekends and holidays are closed.
        </>
      ),
    },
    {
      trigger: "Booking",
      info: (
        <>
          The calendar on our site shows the current availability of our gear
          and is updated in realtime.
          <br />
          <br />
          All bookings are min. 1 day into the future, if you have an urgent
          booking need, please contact us via phone or email.
          <br />
          <br />
          Your booking includes free pick-up, from the day before the first
          rental day 14.00-16.30 and return before 11.00 on the day after the
          last day in your booking.
          <br />
          <br />
          Please write in the comments on your booking, when you wish to pickup
          and return the gear.
          <br />
          <br />
          When adding a booking to the shopping cart, it will hold the item for
          you for 5 min.
          <br />
          <br />
          If you change browsers midway (from your phone to your pc), the site
          might still be holding the items you had in your cart, at the first
          browser.
          <br />
          <br />
          You can cancel your booking free of charge until 2 days before your
          booking begins. Cancellations later than 2 days before booking begins,
          will be charged in full. Late returns will be billed as rental days.
          <br />
          <br />
          Make sure to bring a valid picture ID, when you pick-up your booking.
          <br />
          <br />
          Please contact us if you are planning to take the equipment outside of
          Scandinavia, as this will need our specific written approval.
        </>
      ),
    },
    {
      trigger: "Kits",
      info: (
        <>
          One of our key features is our pre-configured kits which are all
          carefully planned and tested to make sure your production will run
          smooth as butter!
          <br />
          <br />
          It´s actually quite simple.. (pun intended) We have made a range of
          new kits to make your booking experience with us more convenient. The
          kits are full packages of equipment and accessories for a specific
          production need, including everything you need to achieve the example
          content demo in the description.
          <br />
          <br />
          We have added example content shot with exactly the film kit shown. We
          also added a drawing on how to set up the equipment for the specific
          shoot. When you book a kit, you will even get a detailed description
          with even more info on the kit and how to get the most out of it.
          <br />
          <br />
          You can of cause add kits together or combine with a specific add-on
          related to the type of kit, like a camera slider or a colored
          background.
          <br />
          <br />
          The list of kits will grow over the next months and more related
          services to make your productions easier will be added every month.
          Check out the current listings here:{" "}
          <a
            href="https://simplerent.dk/kits/"
            className="text-blue-300 hover:underline"
          >
            https://simplerent.dk/kits/
          </a>
        </>
      ),
    },
    {
      trigger: "Discounts",
      info: (
        <>
          When booking with us, the site automatically applies a "factor rate"
          discount, where the more days you book, the smaller the price pr. day
          will be.
          <br />
          <br />
          To make it simple & fair for all, everyone gets the same low prices
          and discounts automatically when booking on our site.
        </>
      ),
    },
    {
      trigger: "Store credit / wallet",
      info: (
        <>
          When ever you book for more than 800 dkk ex. VAT, you will
          automatically get 10% back in discount which you can use at our site
          for any future bookings.
          <br />
          You are free to choose when you wish to use them.
          <br />
          You cannot exchange the store credit into cash or transfer it to other
          users.
        </>
      ),
    },
    {
      trigger: "Insurance",
      info: (
        <>
          All rentals are insured through TopDanmark insurance within
          Scandinavia. Please contact us if you are planning to take the
          equipment outside of Scandinavia, as this will need our specific
          written approval.
          <br />
          <br />
          You will have to follow the terms of the insurance to be covered, such
          as don't leave the equipment unattended outdoors, in cars or other
          high risk areas.
          <br />
          You will have to cover the first 10.000 Dkk yourself on any claim.
          <br />
          Please check our current terms of business at
          <br />
          <a
            href="https://simplerent.dk/terms-and-conditions/"
            className="text-blue-300 hover:underline"
          >
            https://simplerent.dk/terms-and-conditions/
          </a>
          <br />
          <br />
          Please contact us if you have any questions.
        </>
      ),
    },
    {
      trigger: "Payment",
      info: (
        <>
          Our site works like any webshop, you select the date you want to rent,
          the equipment you want to rent, add it to the basket and check out
          paying with "credit card/ mobilepay", "bank transfer" or "credit
          account/ invoice".
          <br />
          <br />
          Using a credit card to pay your booking is super easy and convenient.
          We use an online payment service, who securely handle all our payments
          externally. All payment data is securely encrypted and no payment data
          is saved on our site.
          <br />
          <br />
          On checkout the amount is reserved on your card until your order is
          finalized 2 days before booking begins, where the payment will be
          charged on your card. Should you cancel your booking earlier than 2
          days before, your card won't be charged.
          <br />
          <br />
          You are welcome to use "Bank transfer" as payment when checking out,
          you will then receive an order confirmation with our bank details to
          use for the transfer. BE AWARE all bookings must be cleared in our
          account before pickup, with NO EXCEPTIONS.
          <br />
          <br />
          Invoice payment. For returning customers with a Danish company
          registration (CVR no.), you can apply for a credit account by writing
          us an email. When we have set up your credit account, you are able to
          select "credit account/ invoicing" on checkout and you can pay your
          order via invoice up to 30 days after the rental has ended. Please
          allow 1-3 days for the credit account to be set up. Apply by setting
          up an account on our site and write us an email after with your CVR
          and invoice info.
          <br />
          <br />
          For EAN customers, please set up an account here and write us an email
          with your EAN, CVR and invoice info after.
          <br />
          <br />
          Please contact us if you have any questions.
        </>
      ),
    },
    {
      trigger: "Pickups & Return at Simplerent",
      info: (
        <>
          All pickups & returns are at our offices at Jernholmen 2, 2650
          Hvidovre.
          <br />
          <br />
          We are open from 9-16.30 Monday to Friday.
          <br />
          Make sure to add a note to your booking when you want to pick-up &
          return your booking.
          <br />
          <br />
          Your booking includes free pickup, from the day before the first
          rental day 14-16.30 and return before 11 on the day after the last day
          in your booking.
          <br />
          <br />
          Make sure to bring a driver's license or passport, when you pick-up
          your booking.
          <br />
          <br />
          Late returns will be billed as full rental days. You can cancel your
          booking free of charge until 2 days before your booking begins.
          Cancellations later than 2 days before booking begins, will be charged
          in full.
          <br />
          <br />
          Sluse/ Garage 24/7 self-service:
          <br />
          <br />
          All customers can return to our 24/7 self-service garage system.
          <br />
          <br />
          Returning customers, who have shown up in person with an ID ahead of
          their booking, can also order to pick-up using the same system.
          <br />
          <br />
          In both cases let us know when you order and we will send you your
          access link.
        </>
      ),
    },
    {
      trigger: "Sluse/ garage 24/7 self service",
      info: (
        <>
          All customers can return in our 24/7 self-service garage/ sluse
          system.
          <br />
          <br />
          Returning customers, who has showed up in person with an ID ahead of
          their booking, can also order to pickup using the same system.
          <br />
          <br />
          In both cases let us know when you order and we will send you your
          access link.
        </>
      ),
    },
    {
      trigger: "Transport delivery & pickup service",
      info: (
        <>
          We offer delivery & pickup service upon availability.
          <br />
          <br />
          See our options at:
          <br />
          <a
            href="https://simplerent.dk/product-category/sales-items/delivery-pickup/"
            className="text-blue-300 hover:underline"
          >
            https://simplerent.dk/product-category/sales-items/delivery-pickup/
          </a>
          <br />
          <br />
          Please make sure to provide valid photo ID when recieving a delivery
          from us as this is needed for us to hand over the equipment.
        </>
      ),
    },
    {
      trigger: "Corona/ Covid 19",
      info: (
        <>
          All Covid restrictions have been lifted in Denmark as of Feb 2022.
          <br />
          <br />
          Please contact us if you have any questions.
        </>
      ),
    },
    {
      trigger: "Contact Shipment",
      info: (
        <>
          Email: hello@simplerent.dk
          <br />
          Tel +45 71992690
          <br />
          SimpleRent Aps
          <br />
          CVR/ VAT DK 34584184
          <br />
          Jernholmen 2<br />
          2650 Hvidovre
        </>
      ),
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 md:px-0 mb-24">
      {accordionItems.map((item, index) => (
        <div
          key={index}
          className={`mb-4 ${
            openIndex === index
              ? "border-b border-lime"
              : "border-b border-gray-300"
          }`}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className={`w-full text-left py-3 sm:py-4 px-3 sm:px-6 bg-inherit hover:bg-gray-800 text-base sm:text-lg font-semibold flex justify-between items-center focus:outline-none transition duration-500 ease-in-out ${
              openIndex === index ? "text-lime" : "text-white"
            }`}
            aria-expanded={openIndex === index}
            aria-controls={`accordion-content-${index}`}
          >
            <span className="pr-2">{item.trigger}</span>
            <span
              className={`text-xl ${openIndex === index ? "text-lime" : "text-white"}`}
            >
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          <div
            id={`accordion-content-${index}`}
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              height:
                openIndex === index ? `${contentHeights[index] || 0}px` : "0px",
              opacity: openIndex === index ? 1 : 0,
            }}
            aria-hidden={openIndex !== index}
          >
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="py-3 sm:py-4 px-3 sm:px-6 bg-inherit text-white text-sm sm:text-base"
            >
              {item.info}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
