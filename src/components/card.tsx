import type { Country } from "@/types";

import { CircleDollarSign, Users } from "lucide-react";

import { endpoints } from "@/config/endpoints";
import { Modal } from "@/components/modal";

type CardProps = {
	country: Country;
};

export const Card = ({ country }: CardProps) => {
	const currencies = Object.entries(country?.currencies || {});
	return (
		<article className="px-5 py-8 duration-200 border-4 border-transparent bg-content1 hover:border-divider rounded-xl">
			<a href={`/country/${country.cca2}`}>
				<div className="flex items-center justify-between">
					<img
						alt={country.flags.alt}
						className="w-16 h-16"
						decoding="async"
						loading="lazy"
						src={endpoints.flags({
							countryCode: country.cca2,
							size: "64",
						})}
					/>

					<h3 className="mt-2 text-xl font-bold dark:text-zinc-200">
						{country.name.common}
					</h3>
				</div>

				<div className="grid justify-between grid-cols-1 mt-4 md:grid-cols-2 gap-y-2 gap-x-4">
					<p className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-200">
						<Users className="text-secondary-500" />
						{country.population.toLocaleString()}
					</p>
					{currencies.length > 0 && (
						<p className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-200">
							<CircleDollarSign className="text-success" />
							{currencies.at(-1)?.[1].name}
						</p>
					)}
					<p className="text-sm text-zinc-500 dark:text-zinc-200">
						{country.region}
					</p>

					<p className="text-sm text-zinc-500 dark:text-zinc-200">
						{country.capital}
					</p>
				</div>
			</a>
			<div className="mt-4">
				<Modal country={country} />
			</div>
		</article>
	);
};
