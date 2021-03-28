import Image from "next/image";
import Link from "next/link";

import { links } from "@utils/menuItems";

export default function Nav() {
	return (
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
				<Link href="/order-now">
					<a className="ml-4 text-xl font-semibold tracking-wide px-8 py-2 bg-blueGray-400 hover:bg-blueGray-500 text-white">
						Order Now
					</a>
				</Link>
			</ul>
		</nav>
	);
}
