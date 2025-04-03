import type { Country } from "@/types";

import { Frown } from "lucide-react";

import { Card } from "@/components/card";

export function List({
	paginatedCountries,
}: {
	paginatedCountries: Country[];
}) {
	return (
		<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{paginatedCountries.length === 0 ? (
				<div className="flex items-center justify-center my-4 gap-x-2">
					<h2 className="text-xl ">No results found</h2>
					<Frown />
				</div>
			) : (
				paginatedCountries.map((country) => (
					<Card country={country} key={country.cca2} />
				))
			)}
		</div>
	);
}
