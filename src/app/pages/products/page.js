import Image from 'next/image'

import KitCard from '@/components/kit_card/KitCard'

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
    </>
  )
}
