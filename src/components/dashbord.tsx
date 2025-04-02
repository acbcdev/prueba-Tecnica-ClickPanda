"use client";
import type { Country } from "@/types/index";
import { Card } from "@/components/card";
import { useMemo, useState } from "react";
import { Pagination } from "@heroui/pagination";
import { useQueryState, parseAsInteger } from "nuqs";

export const Dashboard = ({ countries }: { countries: Country[] }) => {
	const [currentPage, setCurrentPage] = useQueryState(
		"page",
		parseAsInteger.withDefault(1),
	);
	const [pageSize, setPageSize] = useState(24);
	const totalPages = useMemo(
		() => Math.ceil(countries.length / pageSize),
		[countries, pageSize],
	);
	const startIndex = (currentPage - 1) * pageSize;
	const paginatedCountries = countries.slice(startIndex, startIndex + pageSize);

	return (
		<section className="w-full space-y-3">
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{paginatedCountries.map((country) => (
					<Card
						key={country.cca2}
						title={country.name.common}
						population={country.population.toLocaleString()}
						flag={country.cca2}
						region={country.region}
					/>
				))}
			</div>

			<Pagination
				className="mx-auto mb-2 w-fit "
				variant="light"
				initialPage={currentPage}
				showControls
				total={totalPages}
				onChange={(page) => {
					setCurrentPage(page);
				}}
			/>
		</section>
	);
};
