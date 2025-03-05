import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Array med medarbejdernavne
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
      <div className="relative h-[60vh] -mt-[75px]">
        {/* Hero Image Container */}
        <div className="relative w-full h-full">
          <Image
            src="/img/hero.webp"
            alt="Hero Image"
            fill
            priority
            className="object-cover brightness-50"
          />
        </div>

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <div className="text-h1 font-bold mr-4 flex flex-col justify-start items-start">
            <span className="text-lime text-h1">
              We make it simple for you to make awsome content
            </span>
            <div className="w-full flex justify-end"></div>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly gap-4 m-16 mt-32 p-20">
        <div className="max-w-xs">
          <h3 className="text-h1 text-lime">Simple</h3>
          <p>We keep it as simple a possible renting film equipment with us.</p>
        </div>
        <div className="max-w-xs">
          <h3 className="text-h1 text-lime">Learn</h3>
          <p>
            You can always cone and test any of our equipment, if you would like
            to.
          </p>
        </div>
        <div className="max-w-xs">
          <h3 className="text-h1 text-lime">Assistance</h3>
          <p>
            Ask us if you need any assistance for your production, we can
            problably help out.
          </p>
        </div>
      </div>

      {/* Medarbejder sektion */}
      <div className="container mx-auto py-10 px-4 mt-top-spacing">
        <h2 className="text-h2 font-bold mb-6 text-center">The Magic Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-20">
          {employees.map((name, index) => (
            <div
              key={index}
              className="bg-white w-full h-80 rounded-lg shadow-md flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              {/* Placeholder for profilbillede */}
              <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 flex items-center justify-center overflow-hidden">
                <span className="text-3xl text-gray-400">{name.charAt(0)}</span>
              </div>

              {/* Medarbejdernavn */}
              <h3 className="text-xl font-semibold">{name}</h3>

              {/* Jobtitel */}
              <p className="text-gray-600 mt-2">Stilling</p>
            </div>
          ))}
        </div>

        <div className="flex mt-52 justify-evenly m-16">
          <h2 className="text-h1 w-15">
            {" "}
            Keeping film rental <span className="text-lime">Simple.</span>
          </h2>

          <div className="max-w-3xl p-20 ">
            <p>
              Since 2017 we have serviced Danish and international content
              creators working in Denmark. We do our best in making it simple
              and safe to rent film equipment. At SimpleRent you are most
              welcome if you are both a seasoned filmmaker or just starting out
              with content creation. We do our best to make it a simple, hassle
              free & all in all a great experience to work with us. We consist
              of a mix of film and AV people, with a shared passion for gear and
              filmmaking.
            </p>
            <Link href={"/pages/products"}>
              <h2 className="font-bold text-h3 hover:text-lime">
                Check out our gear
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
