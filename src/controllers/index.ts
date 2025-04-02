import { endpoints } from "@/config/endpoints";
import type { Country } from "@/types";
import axios from "axios";

export async function getAllCountries() {
	const response = await axios.get<Country[]>(endpoints.countries.all);
	return response.data;
}

export async function getCountryByName(name: string) {
	const response = await axios.get<Country[]>(
		endpoints.countries.name(name.trim()),
	);
	return response.data;
}

export async function getCountryByRegion(region: string) {
	const response = await axios.get<Country[]>(
		endpoints.countries.region(region.trim()),
	);
	return response.data;
}
