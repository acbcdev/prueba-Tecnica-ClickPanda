import { Dashboard } from "@/components/dashbord";
import { SkeletonDashboard } from "@/components/skeletonDashbord";
import { getAllCountries } from "@/controllers";
import { Suspense } from "react";

export default async function Home() {
  const res = await getAllCountries();

  return (
    <Suspense fallback={<SkeletonDashboard />}>
      <Dashboard countries={res} />
    </Suspense>
  );
}
