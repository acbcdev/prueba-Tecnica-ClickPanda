import { endpoints } from "@/config/endpoints";
import { Users } from "lucide-react";

type CardProps = {
	title: string;
	population: string;
	flag: string;
	region: string;
};

export const Card = ({ title, population, flag, region }: CardProps) => {
	return (
		<article className="px-5 py-8 duration-200 border border-transparent bg-content1 hover:border-divider rounded-xl">
			<div className="flex items-center justify-between">
				<img
					src={endpoints.flags({
						countryCode: flag,
						size: "64",
					})}
					alt={title}
					loading="lazy"
					decoding="async"
					className="w-16 h-16"
				/>
				<h3 className="mt-2 text-xl font-bold dark:text-zinc-200">{title}</h3>
			</div>
			<div className="flex items-center justify-between mt-4 f">
				<p className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-200">
					<Users className="text-secondary-500" /> {population}
				</p>
				<p className="text-sm text-zinc-500 dark:text-zinc-200">{region}</p>
			</div>
		</article>
	);
};
