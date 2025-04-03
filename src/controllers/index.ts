import type { Country } from "@/types";

import axios from "axios";
import { cache } from "react";

import { endpoints } from "@/config/endpoints";

export const getAllCountries = cache(async () => {
	//
	const response = await axios.get<Country[]>(
		"http://localhost:3000/restcountriescomall.json",
	);
	// const response = await axios.get<Country[]>(endpoints.countries.all);

	return response.data;
});

export async function getCountryByName(name: string) {
	const response = await axios.get<Country[]>(
		endpoints.countries.name(name.trim()),
	);

	return response.data;
}

export const getCountryByCode = cache(async (code: string) => {
	try {
		const response = await axios.get<Country[]>(
			endpoints.countries.code(code.trim()),
		);

		return response.data[0];
	} catch {
		return null;
	}
});

export async function getCountryByRegion(region: string) {
	const response = await axios.get<Country[]>(
		endpoints.countries.region(region.trim()),
	);

	return response.data;
}
