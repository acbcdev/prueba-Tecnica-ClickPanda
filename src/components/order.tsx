import type { Options } from "nuqs";

import { Select, SelectItem } from "@heroui/select";

import { SORT } from "@/config/filters";
type OrderProps = {
	sort: string;
	setSort: (
		value:
			| "area"
			| "name"
			| "population"
			| ((
					old: "area" | "name" | "population",
			  ) => "area" | "name" | "population" | null)
			| null,
		options?: Options,
	) => Promise<URLSearchParams>;
};
export function Order({ sort, setSort }: OrderProps) {
	return (
		<Select
			className="w-20 md:w-40"
			defaultSelectedKeys={[sort]}
			label="sort by"
			labelPlacement="outside"
			variant="bordered"
			onChange={(e) => {
				setSort(e.target.value as (typeof SORT)[number]);
			}}
		>
			{SORT.map((sort) => (
				<SelectItem key={sort}>{sort}</SelectItem>
			))}
		</Select>
	);
}
