import Image from "next/image";
import Link from "next/link";

import Nav from "./Nav";

export default function Header() {
	return (
		<div className="w-11/12 mx-auto">
			<Nav />

			<section className="py-20 flex flex-col lg:flex-row items-center justify-between">
				<div className="w-5/6 lg:w-3/5">
					<h1 className="tracking-wider text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-blueGray-700">
						Fleur <br /> Delights
					</h1>
					<p className="text-4xl my-8 tracking-wide text-gray-600">
						Premium quality ingredients, delightful flavours
						blooming in every bite.
					</p>
					<div className="flex flex-col sm:flex-row items-center text-2xl">
						<a
							href="#delights"
							className="my-1 sm:my-0 mx-1 py-3 px-8 border tracking-wide font-bold bg-gray-100 hover:bg-gray-200"
						>
							See Products
						</a>
						<Link href="/order-now">
							<a className="my-1 sm:my-0 mx-1 py-3 px-8 border border-blueGray-500 tracking-wide font-bold bg-blueGray-500 hover:bg-blueGray-600 text-white">
								Order Now
							</a>
						</Link>
					</div>
				</div>
				<div className="w-5/6 md:w-2/3 mt-8 lg:mt-0 lg:w-2/5 h-64 md:h-72 lg:h-96 relative">
					<Image
						src="/background.jpeg"
						layout="fill"
						objectFit="cover"
						className=""
					/>
				</div>
			</section>
		</div>
	);
}
