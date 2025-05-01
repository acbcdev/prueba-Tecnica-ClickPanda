import type { Country } from "@/types";

import { CircleDollarSign, Users } from "lucide-react";

import { endpoints } from "@/config/endpoints";
import { Modal } from "@/components/modal";
import { Image } from "@/components/Image";
type CardProps = {
  country: Country;
};

export const Card = ({ country }: CardProps) => {
  const currencies = Object.entries(country?.currencies || {});
  return (
    <article className="flex flex-col justify-between px-5 pt-6 pb-4 duration-200 border-4 border-transparent card bg-content1 hover:border-divider rounded-xl">
      <a href={`/country/${country.cca2}`}>
        <div className="flex items-center justify-between">
          <Image
            fallback={country.flags.svg}
            alt={country.flags.alt}
            decoding="async"
            className="w-16 h-16"
            loading="lazy"
            src={endpoints.flags({
              countryCode: country.cca2,
              size: "64",
            })}
          />
          <h3 className="mt-2 text-xl font-bold text-end dark:text-zinc-200">
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
      <div className="mt-4 ">
        <Modal country={country} />
      </div>
    </article>
  );
};
