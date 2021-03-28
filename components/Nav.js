import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { links } from "@utils/menuItems";

export default function Nav() {
	const [open, setOpen] = useState(true);

	function handleMenuOpen() {
		setOpen(open ? false : true);
	}

	return (
		<nav className="py-4 flex flex-col md:flex-row items-center justify-between">
			<div className="flex items-center justify-between w-full md:w-auto">
				<div className="inline-flex items-center">
					<Image
						src="/logo.png"
						height="50"
						width="50"
						className="rounded-full"
					/>
					<h1 className="text-2xl font-semibold text-blueGray-700 ml-2 lg:ml-4 tracking-wide uppercase">
						Fleur Delights
					</h1>
				</div>
				<button className="md:hidden h-8 w-8" onClick={handleMenuOpen}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>

			{/* desktop menu */}
			<ul className="hidden md:flex items-center">
				{links.map((link) => (
					<li
						key={link.title}
						className="md:my-0 text-xl mx-2 tracking-wide"
					>
						<Link href={link.redirect}>
							<a className="text-blueGray-600 py-2 px-4 hover:bg-gray-200">
								{link.title}
							</a>
						</Link>
					</li>
				))}
				<Link href="/order-now">
					<a className="ml-4 text-xl font-semibold tracking-wide px-8 py-2 bg-blueGray-400 hover:bg-blueGray-500 text-white">
						Order Now
					</a>
				</Link>
			</ul>

			{/* mobile menu */}
			<ul
				className={`${
					open ? "flex flex-col" : "hidden"
				} items-center md:hidden`}
			>
				{links.map((link) => (
					<li
						key={link.title}
						className="my-1 text-xl mx-2 tracking-wide"
					>
						<Link href={link.redirect}>
							<a className="text-blueGray-600 py-2 px-4 hover:bg-gray-200">
								{link.title}
							</a>
						</Link>
					</li>
				))}
				<Link href="/order-now">
					<a className="mt-2 ml-0 text-xl font-semibold tracking-wide px-8 py-2 bg-blueGray-400 hover:bg-blueGray-500 text-white">
						Order Now
					</a>
				</Link>
			</ul>
		</nav>
	);
}
