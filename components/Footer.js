export default function Footer() {
	return (
		<footer className="py-12 bg-gray-50">
			<div className="text-xl flex items-center justify-between w-11/12 mx-auto">
				<p className="text-blueGray-700">
					&copy; {new Date().getFullYear()} Fleur Delights
				</p>
				<ul>
					<li>
						<a
							href="https://web.facebook.com/delfleur2600"
							className="text-blueGray-600 hover:underline"
						>
							@delfleur2600
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
