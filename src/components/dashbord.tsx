"use client";
import type { Country } from "@/types/index";
import { Card } from "@/components/card";
import { useEffect, useMemo, useState } from "react";
import { Pagination } from "@heroui/pagination";
import { useQueryState, parseAsInteger } from "nuqs";
import { Input } from "@heroui/input";
import { Frown, Search } from "lucide-react";
import { useDebounce } from "@uidotdev/usehooks";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { Button } from "@heroui/button";
import { ListFilter } from "lucide-react";
import { Select, SelectItem } from "@heroui/select";
const PAGE_SIZE = 24;

const REGIONS = [
	"All",
	"Antarctic",
	"Americas",
	"Europe",
	"Africa",
	"Asia",
	"Oceania",
];
const SUB_REGIONS = [
	"Caribbean",
	"Western Europe",
	"Western Africa",
	"Central Europe",
	"Eastern Asia",
	"Polynesia",
	"Northern Africa",
	"Southern Europe",
	"South-Eastern Asia",
	"Eastern Africa",
	"Southern Africa",
	"North America",
	"Middle Africa",
	"Micronesia",
	"Southeast Europe",
	"Western Asia",
	"Northern Europe",
	"Melanesia",
	"Central Asia",
	"Southern Asia",
	"South America",
	"Australia and New Zealand",
	"Central America",
	"Eastern Europe",
];
export const Dashboard = ({ countries }: { countries: Country[] }) => {
	const [filteredCountries, setFilteredCountries] =
		useState<Country[]>(countries);
	const [currentPage, setCurrentPage] = useQueryState(
		"page",
		parseAsInteger.withDefault(1),
	);

	const [search, setSearch] = useQueryState("search", { defaultValue: "" });
	const debouncedSearch = useDebounce(search, 500);

	useEffect(() => {
		const copyCountries = [...countries];
		if (!debouncedSearch) {
			setFilteredCountries(countries);
			return;
		}
		const result = copyCountries.filter((country) =>
			country.name.common.toLowerCase().includes(debouncedSearch.toLowerCase()),
		);
		setFilteredCountries(result);
	}, [debouncedSearch, countries]);

	const totalPages = useMemo(
		() => Math.ceil(filteredCountries.length / PAGE_SIZE),
		[filteredCountries],
	);
	const startIndex = (currentPage - 1) * PAGE_SIZE;
	const paginatedCountries = filteredCountries.slice(
		startIndex,
		startIndex + PAGE_SIZE,
	);

	return (
		<section className="w-full space-y-3">
			<section className="flex items-end gap-2">
				<Input
					variant="bordered"
					label="Search countries"
					labelPlacement="outside"
					onChange={(e) => {
						setSearch(e.target.value);
					}}
					value={search}
					startContent={<Search />}
				/>
				<Popover>
					<PopoverTrigger>
						<Button color="primary">
							Filters <ListFilter />
						</Button>
					</PopoverTrigger>
					<PopoverContent className="p-4">
						<Select
							label="region"
							defaultSelectedKeys={["All"]}
							className="w-44"
						>
							{REGIONS.map((region) => (
								<SelectItem key={region}>{region}</SelectItem>
							))}
						</Select>

						<Select label="subRegion" className="w-44">
							{SUB_REGIONS.map((subregion) => (
								<SelectItem title={subregion} key={subregion}>
									{subregion}
								</SelectItem>
							))}
						</Select>
					</PopoverContent>
				</Popover>
			</section>

			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{paginatedCountries.length === 0 ? (
					<div className="flex items-center justify-center my-4 gap-x-2">
						<h2 className="text-xl ">No results found</h2>
						<Frown />
					</div>
				) : (
					paginatedCountries.map((country) => (
						<Card
							key={country.cca2}
							title={country.name.common}
							population={country.population.toLocaleString()}
							flag={country.cca2}
							region={country.region}
						/>
					))
				)}
			</div>

			{totalPages > 1 && (
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
			)}
		</section>
	);
};
