import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className=' min-h-screen bg-lime-100'>
      <Link href="/products">
        products
      </Link>
    </div>
  )
}
