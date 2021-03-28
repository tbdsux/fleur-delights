import Link from "next/link";

import Layout from "@components/Layout";

export default function OrderNow() {
	return (
		<Layout title="Order Now | Fleur Delights">
			<div className="py-24 flex items-center justify-center">
				<div className="text-2xl w-4/5 mx-auto text-center">
					<h3 className="text-5xl font-black text-blueGray-800">
						Order Now - Fleur Delights
					</h3>
					<div className="my-8">
						<p className="mb-8 text-blueGray-700">
							This page is currently being developed, <br />{" "}
							please send your orders at our facebook page at the
							moment.
						</p>
						<a
							href="https://web.facebook.com/delfleur2600"
							className="bg-blueGray-600 hover:bg-blueGray-700 text-white py-3 px-10"
						>
							@delfleur2600
						</a>
					</div>

					<Link href="/">
						<a className="text-lg underline text-blueGray-500 hover:text-blueGray-600">
							return home
						</a>
					</Link>
				</div>
			</div>
		</Layout>
	);
}
