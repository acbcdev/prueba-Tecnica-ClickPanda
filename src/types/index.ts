import type { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Country {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: Status;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: Region;
  subregion?: string;
  languages?: { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng: number[]; // Often [number, number], but can be less precise in source
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms?: Demonyms;
  flag?: string; // Unicode flag character
  maps: Maps;
  population: number;
  gini?: Record<string, number>; // e.g., { "2015": 30 }
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: Continent[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
}

export interface CapitalInfo {
  latlng?: number[]; // Often [number, number]
}

export interface Car {
  signs?: string[];
  side: Side;
}

export type Side = "left" | "right";

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export type Continent =
  | "Africa"
  | "Antarctica"
  | "Asia"
  | "Europe"
  | "North America"
  | "Oceania"
  | "South America";

export interface Currencies {
  [key: string]: CurrencyDetail; // e.g., "EUR", "USD"
}

export interface CurrencyDetail {
  name: string;
  symbol: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng; // Optional, as not all entries have French demonyms
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName?: Record<string, Translation>;
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export type Region =
  | "Africa"
  | "Americas"
  | "Asia"
  | "Europe"
  | "Oceania"
  | "Antarctic";

export type StartOfWeek = "monday" | "sunday" | "saturday";

export type Status = "officially-assigned" | "user-assigned";
