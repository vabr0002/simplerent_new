import Image from 'next/image'
import KitCard from '@/components/kitCard/KitCard'
import ProductCard from '@/components/productCard/ProductCard'

export default function Home () {
  return (
    <>
      <div className='text-center text-xl font-bold my-4'>Hello World</div>

      {/* Grid layout for 6 cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 place-items-center'>
        <KitCard title='Card 1' description='This is card number 1' />
        <KitCard title='Card 2' description='This is card number 2' />
        <KitCard title='Card 3' description='This is card number 3' />
        <KitCard title='Card 4' description='This is card number 4' />
        <KitCard title='Card 5' description='This is card number 5' />
        <KitCard title='Card 6' description='This is card number 6' />
      </div>

      {/* Grid layout for 6 products */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 place-items-center mt-10'>
        <ProductCard
          title='Sony FX6'
          description='Professional cinema camera.'
          price='30,000 DKK'
          buttonText='Buy Now'
          buttonLink='/products/sony-fx6'
          imageSrc='/img/sony_fx6.jpg'
        />
        <ProductCard
          title='Sony FX6'
          description='Professional cinema camera.'
          price='30,000 DKK'
          buttonText='Buy Now'
          buttonLink='/products/sony-fx6'
          imageSrc='/img/sony_fx6.jpg'
        />
        <ProductCard
          title='Sony FX6'
          description='Professional cinema camera.'
          price='30,000 DKK'
          buttonText='Buy Now'
          buttonLink='/products/sony-fx6'
          imageSrc='/img/sony_fx6.jpg'
        />
        <ProductCard
          title='Sony FX6'
          description='Professional cinema camera.'
          price='30,000 DKK'
          buttonText='Buy Now'
          buttonLink='/products/sony-fx6'
          imageSrc='/img/sony_fx6.jpg'
        />
        <ProductCard
          title='Sony FX6'
          description='Professional cinema camera.'
          price='30,000 DKK'
          buttonText='Buy Now'
          buttonLink='/products/sony-fx6'
          imageSrc='/img/sony_fx6.jpg'
        />
        <ProductCard
          title='Sony FX6'
          description='Professional cinema camera.'
          price='30,000 DKK'
          buttonText='Buy Now'
          buttonLink='/products/sony-fx6'
          imageSrc='/img/sony_fx6.jpg'
        />
      </div>
    </>
  )
}
