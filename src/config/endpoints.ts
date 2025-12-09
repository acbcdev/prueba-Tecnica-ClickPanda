type PropsFlags = {
	countryCode: string;
	style?: "flat" | "shiny";
	size?: "16" | "24" | "32" | "48" | "64";
};

const BASE_URL = "https://restcountries.com/v3.1";

export const endpoints = {
	countries: {
		base: "https://restcountries.com",
		all: `${BASE_URL}/independent`,
		name: (name: string) => `${BASE_URL}/name/${name}`,
		region: (region: string) => `${BASE_URL}/region/${region}`,
		currency: (currency: string) => `${BASE_URL}/currency/${currency}`,
		lang: (lang: string) => `${BASE_URL}/lang/${lang}`,
		subregion: (subregion: string) => `
${BASE_URL}/subregion/${subregion}`,
		code: (code: string) => `${BASE_URL}/alpha/${code}`,
	},
	flags: ({ countryCode, style = "flat", size = "32" }: PropsFlags) =>
		`https://flagsapi.com/${countryCode}/${style}/${size}.png`,
};
