import { endpoints } from "@/config/endpoints";
import { getCountryByCode } from "@/controllers";
import { Users } from "lucide-react";
import { Link } from "@heroui/link";
import UtcClock from "@/components/clock";
import { redirect } from "next/navigation";
export default async function page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const code = await getCountryByCode(id);

	if (!code) {
		return redirect("/not-found");
	}

	return (
		<section className="grid w-full mx-auto placeholder-center">
			<div className="flex items-center justify-around gap-2">
				<div className="flex items-center gap-2">
					<img
						alt={code.flags.alt}
						className="w-16 h-16"
						decoding="async"
						loading="lazy"
						src={endpoints.flags({
							countryCode: code.cca2,
							size: "64",
						})}
					/>

					<h1 className="text-3xl font-bold">{code.name.common}</h1>
				</div>
				<h3>
					{code.timezones.map((i) => (
						<UtcClock key={i} offsetStr={i} />
					))}
				</h3>
			</div>

			<div className="grid grid-cols-3 gap-4 mx-auto mt-5 w-fit place-content-center">
				<article>
					<h2 className="text-xl font-bold text-secondary-500">Population</h2>
					<p className="inline-flex items-center gap-2 mt-1 text-sm text-zinc-500 dark:text-zinc-200">
						<Users className="text-secondary-500" />
						{code.population.toLocaleString()}
					</p>
				</article>
				<article>
					<h2 className="text-xl font-bold text-secondary-500">Capital</h2>
					<p>{code.capital}</p>
				</article>
				<article>
					<h2 className="text-xl font-bold text-secondary-500">Region</h2>
					<p>{code.region}</p>
				</article>
				{code.subregion && (
					<article>
						<h2 className="text-xl font-bold text-secondary-500">Subregion</h2>
						<p>{code.subregion}</p>
					</article>
				)}
				<article>
					<h2 className="text-xl font-bold text-secondary-500">Area</h2>
					<p>{code.area.toLocaleString()} km²</p>
				</article>

				<article>
					<h2 className="text-xl font-bold text-secondary-500">Demonyms</h2>
					<p>
						Feme:{" "}
						{Object.values(code.demonyms ?? {})
							.map((item) => item.f)
							.join(", ")}
					</p>
					<p>
						Masc:{" "}
						{Object.values(code.demonyms ?? {})
							.map((item) => item.m)
							.join(", ")}
					</p>
				</article>
				<article>
					<h2 className="text-xl font-bold text-secondary-500">Currency</h2>
					<p>{Object.values(code.currencies ?? {}).map((item) => item.name)}</p>
				</article>
				<article>
					<h2 className="text-xl font-bold text-secondary-500">
						Currency symbol
					</h2>
					<p>
						{Object.values(code.currencies ?? {}).map((item) => item.symbol)}
					</p>
				</article>
				<article>
					<h2 className="text-xl font-bold text-secondary-500">Languages</h2>
					<p>{Object.values(code.languages ?? {}).map((item) => item)}</p>
				</article>
				{code.flag && (
					<article>
						<h2 className="text-xl font-bold text-secondary-500">
							Emoji: {code.flag}
						</h2>
					</article>
				)}
				{code.tld && (
					<article>
						<h2 className="text-xl font-bold text-secondary-500">
							Top Level Domain:
						</h2>
						<p>{code.tld.join(", ")}</p>
					</article>
				)}
				<article>
					<h2 className="flex items-center gap-1 text-xl font-bold text-secondary-500">
						Independent:
					</h2>
					<p>{code.independent ? "Yes" : "No"}</p>
				</article>
				<article>
					<h2 className="text-xl font-bold text-secondary-500">Status</h2>
					<p>{code.status}</p>
				</article>
				<article>
					<h2 className="text-xl font-bold text-secondary-500">
						International Direct Dialling
					</h2>
					<p>{code.idd.root}</p>
				</article>
				<article>
					<h2 className="text-xl font-bold text-secondary-500">Borders</h2>
					<p>{code.borders?.join(", ")}</p>
				</article>

				<article>
					<h2 className="text-xl font-bold text-secondary-500">Gini</h2>
					<p>
						{Object.entries(code.gini ?? {}).map(
							([key, value]) => `${key} : ${value}`,
						)}
					</p>
				</article>

				{code.coatOfArms.svg && (
					<article>
						<h2 className="mb-2 text-xl font-bold text-secondary-500">
							Coat of Arms
						</h2>
						<img
							className="size-32"
							src={code.coatOfArms.svg}
							alt="Coat of Arms"
							loading="lazy"
							decoding="async"
						/>
					</article>
				)}
				<article>
					<h2 className="text-xl font-bold text-secondary-500">
						continent{code.continents?.length > 1 ? "s" : ""}
					</h2>
					<p>{code.continents?.join(", ")}</p>
				</article>
				<article>
					<h2 className="text-xl font-bold text-secondary-500">Fifa</h2>
					<p>{code.fifa}</p>
				</article>
				<article>
					<h2 className="text-xl font-bold text-secondary-500">Maps</h2>
					<div className="flex items-center gap-2">
						<Link href={code.maps.googleMaps} target="_blank">
							Google Maps
						</Link>
						<Link href={code.maps.openStreetMaps} target="_blank">
							Open Street Maps
						</Link>
					</div>
				</article>

				<article>
					<h2 className="text-xl font-bold text-secondary-500">
						State of Week
					</h2>
					<p>{code.startOfWeek}</p>
				</article>

				<article className="col-span-3">
					<h2 className="text-xl font-bold text-secondary-500">Translations</h2>
					<p>
						{Object.values(code.translations ?? {})
							.map((item) => item.official)
							.join(", ")}
					</p>
				</article>
			</div>
		</section>
	);
}
