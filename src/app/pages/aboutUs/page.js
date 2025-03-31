import Image from "next/image"; // Next.js optimized image component
import Link from "next/link";   // Next.js routing/linking component

export default function Home() {
  // Static list of employee names to render the team section
  const employees = [
    "Jude",
    "Maria",
    "Anders",
    "Sofie",
    "Peter",
    "Louise",
    "Mikkel",
    "Emma"
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[60vh] -mt-[75px]">
        {/* Background hero image */}
        <div className="relative w-full h-full">
          <Image
            src="/img/hero.webp"
            alt="Hero Image"
            fill // Makes the image fill the container
            priority // Loads the image as high priority (good for above-the-fold images)
            className="object-cover brightness-50" // Cover the container and darken for text overlay
          />
        </div>
        {/* Hero text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <div className="text-3xl sm:text-4xl md:text-h1 font-bold flex flex-col justify-center items-center">
            <span className="text-lime">
              We make it simple for you to make awesome content
            </span>
          </div>
        </div>
      </div>

      {/* Three Columns Section (Simple / Learn / Assistance) */}
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-8 md:py-16 px-4 md:px-20">
          {/* Column 1 - Simple */}
          <div className="max-w-xs text-center md:text-left">
            <h3 className="text-3xl md:text-h1 text-lime">Simple</h3>
            <p>
              We keep it as simple as possible renting film equipment with us.
            </p>
          </div>
          {/* Column 2 - Learn */}
          <div className="max-w-xs text-center md:text-left">
            <h3 className="text-3xl md:text-h1 text-lime">Learn</h3>
            <p>
              You can always come and test any of our equipment if you’d like
              to.
            </p>
          </div>
          {/* Column 3 - Assistance */}
          <div className="max-w-xs text-center md:text-left">
            <h3 className="text-3xl md:text-h1 text-lime">Assistance</h3>
            <p>
              Ask us if you need any assistance for your production; we can
              probably help out.
            </p>
          </div>
        </div>
      </div>

      {/* Employee Section (The Magic Team) */}
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-h2 font-bold mb-6 text-center">The Magic Team</h2>
        {/* Grid of employee cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-20">
          {employees.map((name, index) => (
            <div
              key={index}
              className="bg-white w-full h-64 rounded-lg shadow-md flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              {/* Placeholder for profile photo using initials */}
              <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-gray-200 mb-4 flex items-center justify-center overflow-hidden">
                <span className="text-2xl md:text-3xl text-gray-400">
                  {name.charAt(0)}
                </span>
              </div>
              {/* Employee name */}
              <h3 className="text-lg md:text-xl font-semibold">{name}</h3>
              {/* Placeholder for role/title */}
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                Stilling
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Final Text Section with Call to Action */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 m-8 md:m-16 p-4 md:p-20">
        <h2 className="text-3xl md:text-h1 text-center md:text-left">
          Keeping film rental <span className="text-lime">Simple.</span>
        </h2>
        <div className="max-w-3xl text-center md:text-left">
          <p>
            Since 2017 we have serviced Danish and international content
            creators working in Denmark. We do our best in making it simple and
            safe to rent film equipment. At SimpleRent you are most welcome if
            you are both a seasoned filmmaker or just starting out with content
            creation. We do our best to make it a simple, hassle-free &
            all-in-all a great experience to work with us. We consist of a mix
            of film and AV people, with a shared passion for gear and
            filmmaking.
          </p>
          {/* Link to products page */}
          <Link href="/pages/products">
            <h2 className="font-bold text-h3 hover:text-lime mt-4 inline-block">
              Check out our gear
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
}