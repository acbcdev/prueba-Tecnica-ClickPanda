import { Dashboard } from "@/components/dashbord";
import { getAllCountries } from "@/controllers";
import { Suspense } from "react";

export default async function Home() {
	const res = await getAllCountries();

	return (
		<Suspense>
			<Dashboard countries={res} />
		</Suspense>
	);
}
