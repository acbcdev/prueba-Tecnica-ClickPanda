"use client";
import type { Country } from "@/types/index";

import { Pagination } from "@heroui/pagination";
import { RotateCcw } from "lucide-react";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";

import { List } from "./list";

import { useFilters } from "@/hooks/useFilters";
import { Search } from "@/components/search";
import { Order } from "@/components/order";
import { Filters } from "@/components/filters";

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
          <Order setSort={setSort} sort={sort} />
          <Filters
            currencies={currencies}
            currency={currency}
            lang={lang}
            langs={langs}
            region={region}
            setCurrency={setCurrency}
            setLang={setLang}
            setRegion={setRegion}
            setSubRegion={setSubRegion}
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
