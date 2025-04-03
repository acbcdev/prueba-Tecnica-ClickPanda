"use client";
import type { Country } from "@/types/index";
import { Pagination } from "@heroui/pagination";
import { RotateCcw } from "lucide-react";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { useFilters } from "@/hooks/useFilters";
import { Search } from "@/components/search";
import { Order } from "@/components/order";
import { Filters } from "@/components/filters";
import { List } from "./list";

export const Dashboard = ({ countries }: { countries: Country[] }) => {
	const {
		currentPage,
		setCurrentPage,
		sort,
		setSort,
		search,
		setSearch,
		region,
		setRegion,
		setSubRegion,
		lang,
		setLang,
		currency,
		setCurrency,
		paginatedCountries,
		totalPages,
		showResetFilters,
		langs,
		subRegion,
		currencies,
	} = useFilters(countries);

	return (
		<section className="w-full space-y-3">
			<section className="flex items-end justify-between gap-2">
				<Search search={search} setSearch={setSearch} />
				<div className="flex items-end gap-2">
					{showResetFilters && (
						<Tooltip content="Reset filters">
							<Button
								isIconOnly
								onPress={() => {
									setRegion("All");
									setSubRegion("");
									setLang("");
									setCurrency("");
								}}
							>
								<RotateCcw />
							</Button>
						</Tooltip>
					)}
					<Order sort={sort} setSort={setSort} />
					<Filters
						currencies={currencies}
						lang={lang}
						setLang={setLang}
						region={region}
						setRegion={setRegion}
						setSubRegion={setSubRegion}
						subRegion={subRegion}
						setCurrency={setCurrency}
						currency={currency}
						langs={langs}
					/>
				</div>
			</section>
			<List paginatedCountries={paginatedCountries} />
			{totalPages > 1 && (
				<Pagination
					showControls
					className="mx-auto mb-2 w-fit "
					initialPage={currentPage}
					total={totalPages}
					variant="light"
					onChange={(page) => {
						setCurrentPage(page);
						window.scrollTo({ top: 0 });
					}}
				/>
			)}
		</section>
	);
};
