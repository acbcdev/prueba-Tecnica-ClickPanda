import { Button } from "@heroui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { Select, SelectItem } from "@heroui/select";
import { ListFilter } from "lucide-react";

import { REGIONS, SUB_REGIONS } from "@/config/filters";

type PropsFilters = {
  region: string;
  setRegion: (value: string) => void;
  setSubRegion: (value: string) => void;
  lang: string;
  setLang: (value: string) => void;
  currency: string;
  setCurrency: (value: string) => void;
  langs: string[];
  currencies: string[];
};

export function Filters({
  region,
  setRegion,
  setSubRegion,
  lang,
  setLang,
  currency,
  setCurrency,
  langs,
  currencies,
}: PropsFilters) {
  return (
    <Popover>
      <PopoverTrigger>
        <Button color="primary">
          Filters <ListFilter />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="grid grid-cols-2 gap-4 p-4">
        <Select
          className="w-44"
          defaultSelectedKeys={[region]}
          label="region"
          onChange={(e) => {
            setRegion(e.target.value);
          }}
        >
          {REGIONS.map((region) => (
            <SelectItem key={region}>{region}</SelectItem>
          ))}
        </Select>

        <Select
          className="w-44 "
          label="subRegion"
          onChange={(e) => {
            setSubRegion(e.target.value);
          }}
        >
          {SUB_REGIONS.map((subregion) => (
            <SelectItem key={subregion} title={subregion}>
              {subregion}
            </SelectItem>
          ))}
        </Select>

        <Select
          className="w-44"
          defaultSelectedKeys={[lang]}
          label="language"
          onChange={(e) => {
            setLang(e.target.value);
          }}
        >
          {langs.map((lang) => (
            <SelectItem key={lang} title={lang}>
              {lang}
            </SelectItem>
          ))}
        </Select>

        <Select
          className="w-44"
          defaultSelectedKeys={[currency]}
          label="currency"
          onChange={(e) => {
            setCurrency(e.target.value);
          }}
        >
          {currencies.map((currency) => (
            <SelectItem key={currency} title={currency}>
              {currency}
            </SelectItem>
          ))}
        </Select>
      </PopoverContent>
    </Popover>
  );
}
