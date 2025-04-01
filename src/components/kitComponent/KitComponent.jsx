import React from "react";
import Link from "next/link";
import Image from "next/image";
const KitComponent = () => {
  return (
    <>
      <article className="flex flex-col gap-8 px-4 md:px-24">
        <div className="bg-[url('/img/hero.webp')] bg-cover bg-center py-20 pb-24">
          <h1>KitComponent</h1>
          <h2>Price</h2>
          <Link href="#">Book This kit here</Link>
        </div>

        <div>
          <h1>This Kit Consist of</h1>

          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
          <div>Item 5</div>
          <div>Item 6</div>
        </div>

        <div>
          <h1>Kit Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odio
            harum iusto distinctio animi reprehenderit, sapiente voluptatem
            dignissimos dolorem earum adipisci, quis atque necessitatibus
            doloremque ipsum odit laudantium! Reprehenderit, nemo!Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ipsam odio harum iusto
            distinctio animi reprehenderit, sapiente voluptatem dignissimos
            dolorem earum adipisci, quis atque necessitatibus doloremque ipsum
            odit laudantium! Reprehenderit, nemo!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ipsam odio harum iusto distinctio
            animi reprehenderit, sapiente voluptatem dignissimos dolorem earum
            adipisci, quis atque necessitatibus doloremque ipsum odit
            laudantium! Reprehenderit, nemo!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ipsam odio harum iusto distinctio
            animi reprehenderit, sapiente voluptatem dignissimos dolorem earum
            adipisci, quis atque necessitatibus doloremque ipsum odit
            laudantium! Reprehenderit, nemo!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ipsam odio harum iusto distinctio
            animi reprehenderit, sapiente voluptatem dignissimos dolorem earum
            adipisci, quis atque necessitatibus doloremque ipsum odit
            laudantium! Reprehenderit, nemo!
          </p>
          <Image
            className="rounded-xl"
            src="/img/hero.webp"
            alt="Kit Image"
            width={500}
            height={500}
          />
        </div>

        <div>
          <div>
            <h3>Pricing</h3>
            <p>1 day</p>
            <p>2 day</p>
            <p>3 day</p>
            <p>Price for the selected rental period</p>
            <p>xxxxxxx</p> <p>dkkr</p>
          </div>
          <div>
            <h3>Rental period</h3>
            <div>box 1</div>
            <div>box 2</div>
            <button>reserve</button>
          </div>
        </div>
      </article>
    </>
  );
};

export default KitComponent;
