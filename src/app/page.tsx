import { Dashboard } from "@/components/dashbord";
import { getAllCountries } from "@/controllers";

export default async function Home() {
	const res = await getAllCountries();

	return <Dashboard countries={res} />;
}
