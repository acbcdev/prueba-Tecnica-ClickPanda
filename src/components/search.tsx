import { Input } from "@heroui/input";
import { Kbd } from "@heroui/kbd";
import { useHotkeys } from "react-hotkeys-hook";
import { SearchIcon } from "lucide-react";
import { useRef } from "react";
export function Search({
	search,
	setSearch,
}: {
	search: string;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
}) {
	const searchRef = useRef<HTMLInputElement>(null);
	useHotkeys(
		"cmd+k,ctrl+k",
		() => {
			searchRef.current?.focus();
		},
		{ preventDefault: true },
	);

	return (
		<Input
			className="max-w-xl"
			ref={searchRef}
			label="Search countries"
			labelPlacement="outside"
			startContent={<SearchIcon />}
			value={search}
			endContent={<Kbd keys={["command"]}>k</Kbd>}
			variant="bordered"
			onChange={(e) => {
				setSearch(e.target.value);
			}}
		/>
	);
}
