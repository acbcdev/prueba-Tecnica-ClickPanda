import type { Country } from "@/types";

import { useDebounce } from "@uidotdev/usehooks";
import { parseAsInteger, parseAsStringLiteral, useQueryState } from "nuqs";
import { useEffect, useMemo, useState } from "react";

import { PAGE_SIZE, SORT } from "@/config/filters";

export function useFilters(countries: Country[]) {
  const [filteredCountries, setFilteredCountries] =
    useState<Country[]>(countries);

  const [currentPage, setCurrentPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1),
  );

  const [sort, setSort] = useQueryState(
    "sort",
    parseAsStringLiteral(SORT).withDefault("name"),
  );

  const [search, setSearch] = useQueryState("search", { defaultValue: "" });

  const debouncedSearch = useDebounce(search, 400);
  const [region, setRegion] = useQueryState("region", {
    defaultValue: "All",
  });
  const [subRegion, setSubRegion] = useQueryState("subRegion", {
    defaultValue: "",
  });
  const [lang, setLang] = useQueryState("lang", {
    defaultValue: "",
  });
  const [currency, setCurrency] = useQueryState("currency", {
    defaultValue: "",
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    let result = [...countries];

    // Filter by search
    if (debouncedSearch) {
      result = result.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase()),
      );
    }

    // Filter by region
    if (region !== "All") {
      result = result.filter((country) => country.region === region);
    }

    // Filter by subregion
    if (subRegion) {
      result = result.filter((country) => country.subregion === subRegion);
    }

    // Filter by language
    if (lang) {
      result = result.filter((country) =>
        Object.values(country.languages ?? {}).includes(lang),
      );
    }

    // Filter by currency
    if (currency) {
      result = result.filter((country) =>
        Object.values(country.currencies ?? {}).some(
          (curr) => curr.name === currency,
        ),
      );
    }
    setCurrentPage(1);

    // Apply sorting
    result.sort((a, b) => {
      switch (sort) {
        case "name":
          return a.name.common.localeCompare(b.name.common);
        case "population":
          return b.population - a.population;
        case "area":
          return b.area - a.area;
        default:
          return 0;
      }
    });

    setFilteredCountries(result);
  }, [countries, debouncedSearch, region, subRegion, lang, currency, sort]);

  const totalPages = useMemo(
    () => Math.ceil(filteredCountries.length / PAGE_SIZE),
    [filteredCountries],
  );

  const startIndex = (currentPage - 1) * PAGE_SIZE;

  const paginatedCountries = filteredCountries.slice(
    startIndex,
    startIndex + PAGE_SIZE,
  );

  const langs = useMemo(() => {
    return Array.from(
      new Set(
        countries
          .flatMap((country) => {
            return Object.values(country.languages ?? {});
          })
          .filter(Boolean),
      ),
    );
  }, [countries]);

  const currencies = useMemo(() => {
    return Array.from(
      new Set(
        countries
          .flatMap((country) => {
            return Object.values(country.currencies ?? {})[0]?.name;
          })
          .filter(Boolean),
      ),
    );
  }, [countries]);
  const showResetFilters = useMemo(() => {
    return (
      region !== "All" || subRegion !== "" || lang !== "" || currency !== ""
    );
  }, [region, subRegion, lang, currency]);

  return {
    filteredCountries,
    setFilteredCountries,
    currentPage,
    setCurrentPage,
    sort,
    setSort,
    search,
    setSearch,
    region,
    setRegion,
    subRegion,
    setSubRegion,
    lang,
    setLang,
    currency,
    setCurrency,
    totalPages,
    startIndex,
    paginatedCountries,
    langs,
    currencies,
    showResetFilters,
  };
}
