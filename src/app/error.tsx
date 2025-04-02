"use client";

import { Button } from "@heroui/button";

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export default function Error({
	reset,
}: {
	reset: () => void;
}) {
	return (
		<div className="absolute inset-0 grid gap-2 place-content-center">
			<h2 className="text-xl">Something went wrong! </h2>

			<Button onClick={() => reset()}>Try again</Button>
		</div>
	);
}
