import type { Currencies } from "@/types";

import { CircleDollarSign, Users } from "lucide-react";

import { endpoints } from "@/config/endpoints";

type CardProps = {
	title: string;
	population: string;
	flag: string;
	region: string;
	currency: Currencies | undefined;
	capital: string;
};

export const Card = ({
	title,
	population,
	flag,
	region,
	currency = {},
	capital,
}: CardProps) => {
	return (
		<article className="px-5 py-8 duration-200 border-4 border-transparent bg-content1 hover:border-divider rounded-xl">
			<a href={`/country/${flag}`}>
				<div className="flex items-center justify-between">
					<img
						alt={title}
						className="w-16 h-16"
						decoding="async"
						loading="lazy"
						src={endpoints.flags({
							countryCode: flag,
							size: "64",
						})}
					/>

					<h3 className="mt-2 text-xl font-bold dark:text-zinc-200">{title}</h3>
				</div>

				<div className="grid justify-between grid-cols-2 mt-4 gap-y-2">
					<p className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-200">
						<Users className="text-secondary-500" /> {population}
					</p>
					{Object.keys(currency).length > 0 && (
						<p className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-200">
							<CircleDollarSign className="text-success" />
							{Object.keys(currency)[0]}
						</p>
					)}
					<p className="text-sm text-zinc-500 dark:text-zinc-200">{region}</p>

					<p className="text-sm text-zinc-500 dark:text-zinc-200">{capital}</p>
				</div>
			</a>
		</article>
	);
};
