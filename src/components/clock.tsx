"use client";
import { getTimeWithOffset, parseUtcOffset } from "@/utils/lib";
import { useEffect, useState } from "react";

export default function UtcClock({ offsetStr }: { offsetStr: string }) {
	const offset = parseUtcOffset(offsetStr);
	const [time, setTime] = useState(getTimeWithOffset(offset));

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(getTimeWithOffset(offset));
		}, 1000);

		return () => clearInterval(interval);
	}, [offset]);

	return <div className="font-mono text-2xl">{time}</div>;
}
