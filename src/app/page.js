import Image from 'next/image'
import Link from 'next/link'

export default function Home () {
  return (
    <>
      <div className='text-center text-xl font-bold my-4'>Hello World</div>

      <div className='flex flex-col items-center'>
        <Link href='/pages/products'>
          <button className='bg-lime text-black p-2 rounded-lg'>
            Click Me
          </button>
        </Link>
      </div>
    </>
  )
}
