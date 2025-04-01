import React from "react";
import Link from "next/link";
import Image from "next/image";

const KitComponent = () => {
  return (
    <>
      <article className="flex flex-col gap-8 px-4 md:px-24">
        {/* Hero Section */}
        <div className="bg-[url('/img/hero.webp')] bg-cover bg-center py-20 pb-24 text-white flex flex-col items-start px-8">
          <h1 className="text-h1 font-bold text-lime">KitComponent</h1>
          <h2 className="text-lg font-semibold text-lime-300">Price</h2>
          <Link
            href="#"
            className="bg-lime text-black border-2 border-lime hover:bg-transparent hover:text-lime transition-all duration-300 px-6 py-4 rounded-lg mt-8"
          >
            Book This Kit Here
          </Link>
        </div>

        {/* Kit Contents Section */}
        <div>
          <h1 className="text-3xl font-bold text-center">
            This Kit Consists Of
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {[
              { name: "Sony FX6 – Basic kit", img: "/img/sony-fx6.jpg" },
              {
                name: "Sennheiser AVX ME2 Set",
                img: "/img/sennheiser-avx.jpg"
              },
              { name: "Sennheiser MKE 600", img: "/img/sennheiser-mke.jpg" },
              {
                name: "Nanlite Forza 300B Bi-Color LED",
                img: "/img/nanlite-300b.jpg"
              },
              {
                name: "Nanlite Forza 60B LED Monolight",
                img: "/img/nanlite-60b.jpg"
              },
              {
                name: "Sony FE 28-135mm f/4.0 OSS G Powerzoom",
                img: "/img/sony-lens.jpg"
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
                <p className="font-semibold mt-2">{item.name}</p>
                <Link href="#" className="text-blue-500 text-sm">
                  READ MORE
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Kit Description & Pricing Section */}
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row gap-12 items-center mt-20 ">
            {/* Venstre side - Tekstindhold */}
            <div className="md:w-1/2 flex flex-col gap-6">
              <h1 className="text-3xl font-bold">Interview Kit</h1>
              <p className="text-lg">
                Do you like this look? Book this exact setup for your next
                shoot!
              </p>
              <p>
                This is a great kit to produce high-quality looking content,
                straight out of the camera. It is built around the amazing and
                extremely versatile Sony FX6 camera with a soft lighting package
                and both wireless mic as well as a boom mic, to make sure no
                audio is missed.
              </p>

              {/* Pricing Section */}
              <div className="mt-4">
                <h3 className="text-xl font-bold">Pricing</h3>
                <p>
                  1 Day <strong>3.250,00 DKK</strong>
                </p>
                <p>
                  2 Days <strong>4.875,00 DKK</strong> excl. VAT
                </p>
                <p>
                  4 Days <strong>8.125,00 DKK</strong> excl. VAT
                </p>
                <p className="font-semibold text-lg mt-2">
                  Price for selected rental period:
                </p>
                <p className="text-xl font-bold">3.250,00 DKK excl. VAT</p>
              </div>

              {/* Rental Period */}
              <div className="mt-4">
                <h3 className="text-xl font-bold">Rental Period</h3>
                <div className="flex items-center gap-4">
                  <label>
                    First day:
                    <input type="date" className="border p-2 ml-2" />
                  </label>
                  <label>
                    Last day:
                    <input type="date" className="border p-2 ml-2" />
                  </label>
                </div>
                <p className="text-green-500 mt-2">1 / 2 available</p>
                <button className="bg-lime text-black border-2 border-lime hover:bg-transparent hover:text-lime transition-all duration-300 px-6 py-4 rounded-lg mt-8">
                  RESERVE
                </button>
              </div>
            </div>

            {/* Højre side - Billedet */}
            <div className="md:w-1/2">
              <Image
                src="/img/interview-kit.jpg"
                alt="Interview Kit Setup"
                width={600}
                height={400}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default KitComponent;
