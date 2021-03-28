import Image from 'next/image'
import Link from 'next/link'

import { links } from '@utils/menuItems'

export default function Header() {
  return (
    <div className="w-11/12 mx-auto">
      <nav className="py-4 flex items-center justify-between">
        <div className="inline-flex items-center">
          <Image
            src="/logo.png"
            height="50"
            width="50"
            className="rounded-full"
          />
          <h1 className="text-2xl font-semibold text-blueGray-700 ml-4 tracking-wide uppercase">
            Fleur Delights
          </h1>
        </div>
        <ul className="flex items-center">
          {links.map((link) => (
            <li key={link.title} className="text-xl mx-2 tracking-wide">
              <Link href={link.redirect}>
                <a className="text-blueGray-600 py-2 px-4 hover:bg-gray-200">
                  {link.title}
                </a>
              </Link>
            </li>
          ))}
          <Link href="">
            <a className="ml-4 text-xl font-semibold tracking-wide px-8 py-2 bg-blueGray-400 hover:bg-blueGray-500 text-white">
              Order Now
            </a>
          </Link>
        </ul>
      </nav>

      <section className="py-20 flex items-center justify-between">
        <div className="w-3/5">
          <h1 className="tracking-wider text-8xl xl:text-9xl font-black text-blueGray-700">
            Fleur <br /> Delights
          </h1>
          <p className="text-4xl my-8 tracking-wide text-gray-600">
            Premium quality ingredients, delightful flavours blooming in every
            bite.
          </p>
          <div className="inline-flex items-center text-2xl">
            <button className="mx-1 py-3 px-8 border tracking-wide font-bold bg-gray-100 hover:bg-gray-200">
              See Products
            </button>
            <button className="mx-1 py-3 px-8 border border-blueGray-500 tracking-wide font-bold bg-blueGray-500 hover:bg-blueGray-600 text-white">
              Order Now
            </button>
          </div>
        </div>
        <div className="relative w-2/5 h-96">
          <Image
            src="/background.jpeg"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
      </section>
    </div>
  )
}
