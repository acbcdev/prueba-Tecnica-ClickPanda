import { Suspense } from "react";

import { Dashboard } from "@/components/dashbord";
import { SkeletonDashboard } from "@/components/skeletonDashbord";
import { getAllCountries } from "@/controllers";

export default async function Home() {
  const res = await getAllCountries();

  return (
    <Suspense fallback={<SkeletonDashboard />}>
      <Dashboard countries={res} />
    </Suspense>
  );
}
