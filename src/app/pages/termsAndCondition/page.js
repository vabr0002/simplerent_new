export default function Home() {
  return (
    <div className="">
      <div className="flex justify-center">
        <h1 className="text-h1 m-top-spacing">Terms & Conditions</h1>
      </div>

      <div className="px-20 mx-40 gap-6">
        <p>
          Thank you for considering Simple Rent ApS as your rental provider for
          audio-visual equipment. Our goal is to keep film rental simple, and
          our terms and conditions reflect that. For the purposes of these
          terms, “We”, “Us”, and “Our” refer to SimpleRent ApS, Jernholmen 2,
          2650 Hvidovre, Denmark (CVR: 34584184), while “You” and “Your” refer
          to the contracting party or person/company legally responsible for the
          rental agreement. By renting our equipment, you agree to be bound by
          the terms and conditions below:
        </p>

        <h2 className="text-h3 my-2 text-lime">
          Website and Availability Calendar
        </h2>
        <p>
          The calendar on our website, simplerent.dk (“Website”), shows the
          current availability of our gear, updated in real-time as a service to
          you. However, we cannot be held liable for any loss or damages due to
          discrepancies in equipment availability. If equipment requires
          servicing or is unavailable, we will strive to provide alternatives
          and contact you directly. Bookings must be made at least 1 day prior
          to pickup to allow preparation. For urgent same-day pickups, contact
          us via phone or email to check availability, subject to an urgency
          fee. Items in your shopping cart are reserved for 5 minutes; switching
          browsers mid-process may affect cart availability.
        </p>

        <h2 className="text-h3 my-2 text-lime">
          Rental Period and Pickup/Return Information
        </h2>
        <p>
          The rental period is the duration the equipment is rented and not
          returned to us. You may pick up equipment for free the day before your
          rental starts, between 14:00 and 16:30 at our office (Jernholmen 2,
          2650 Hvidovre, Denmark), with a valid picture ID (e.g., passport or
          driver’s license). Early or late pickups outside this timeframe will
          incur additional rental day charges. Equipment must be returned by
          11:00 AM the day after your booking ends, or additional days will be
          invoiced. Returns can be made to our office during hours or via our
          24/7 self-service garage system. Returning customers who have shown ID
          in person can also use this system for pickup—notify us at booking for
          an access link. Please specify expected pickup and return times in
          your order comments.
        </p>

        <h2 className="text-h3 my-2 text-lime">Rental Fees and Deposits</h2>
        <p>
          Full payment of rental fees and deposits is required via our Website
          or in person before equipment release. Deposits are refunded upon
          return of equipment in original condition. Our site functions like a
          web shop: select dates and equipment, add to cart, and pay via:
        </p>
        <ul>
          <li>
            <strong>Credit Card/MobilePay:</strong> Payments are handled
            securely by an external service; data is encrypted, and nothing is
            stored on our site. Funds are reserved at checkout and charged 2
            days before the rental begins. Cancel 2+ days prior to avoid
            charges.
          </li>
          <li>
            <strong>Bank Transfer:</strong> Receive bank details with your order
            confirmation. Payment must clear before pickup—no exceptions.
          </li>
          <li>
            <strong>Credit Account/Invoice:</strong> Returning Danish customers
            (with CVR) can apply for a credit account via email. Once approved
            (1-3 days), pay via invoice up to 30 days post-rental. EAN customers
            should email us with EAN, CVR, and invoice details.
          </li>
        </ul>

        <h2 className="text-h3 my-2 text-lime">Cancellation</h2>
        <p>
          Cancel free of charge up to 2 days before your rental begins. Later
          cancellations are charged in full.
        </p>

        <h2 className="text-h3 my-2 text-lime">Responsibility and Insurance</h2>
        <p>
          We require customers to take reasonable care of our equipment. Per
          Danish law, you are liable for damages from misuse or negligence,
          while we cover normal wear and tear. You must use the equipment only
          for its intended purpose. You are responsible for any damage or loss
          not covered by insurance or exceeding the deductible.
        </p>

        <h2 className="text-h3 my-2 text-lime"> Insurance</h2>
        <p>
          Our equipment is insured by TopDanmark A/S in Denmark, Sweden, and
          Norway, with a DKK 10,000 deductible per claim, payable by you in case
          of loss or damage. To be covered, adhere to insurance terms (e.g., do
          not leave equipment unattended outdoors or in cars). Contact us for
          full insurance conditions based on your usage.
        </p>

        <h2 className="text-h3 my-2 text-lime">
          Liability, Indemnification, and Termination
        </h2>
        <p>
          You agree to indemnify us against claims, damages, or losses arising
          from equipment use, including third-party claims. We may terminate the
          agreement if you breach these terms or infringe third-party rights.
        </p>

        <h2 className="text-h3 my-2 text-lime">Modifications</h2>
        <p>
          We may update these terms without notice. Review them at
          www.simplerent.dk/terms-and-conditions before each booking, even as a
          returning customer.
        </p>

        <h2 className="text-h3 my-2 text-lime">Jurisdiction</h2>
        <p>
          This agreement is governed by Danish law. Disputes will be settled
          initially by the Copenhagen City Court.
        </p>
      </div>
    </div>
  );
}
