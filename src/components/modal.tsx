import type { Country } from "@/types";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
	Modal as HeroModal,
	ModalContent,
	ModalHeader,
	ModalBody,
	useDisclosure,
} from "@heroui/modal";
type PropsModal = {
	country: Country;
	onClose?: VoidFunction;
	onOpen?: VoidFunction;
};

export function Modal({ country }: PropsModal) {
	const {
		isOpen,
		onOpen: onOpenModal,
		onClose: onCloseModal,
	} = useDisclosure();
	const currencies = Object.entries(country?.currencies || {}).map(
		([code, { name, symbol }]) => (
			<span key={code} className="mb-2 mr-2">
				{name} ({symbol}) <span className="ml-1 opacity-70">{code}</span>
			</span>
		),
	) || <span className="text-muted-foreground">N/A</span>;

	return (
		<>
			<Button color="primary" variant="light" onPress={onOpenModal}>
				Fast Preview
			</Button>
			<HeroModal backdrop="blur" isOpen={isOpen} onClose={onCloseModal}>
				<ModalContent>
					{(onCloseModal) => (
						<>
							<ModalHeader>
								{country?.name.common} {country.flag}
							</ModalHeader>
							<ModalBody>
								<p>Oficial name: {country?.name.official}</p>
								<p>area: {country.area.toLocaleString()}km²</p>
								<p>Population: {country?.population.toLocaleString()}</p>
								<p>Capital: {country?.capital?.join(", ")}</p>
								<p>Region: {country?.region}</p>
								<p>SubRegion: {country?.subregion}</p>
								<p>Currencies: {currencies}</p>
								<p>TLD: {country?.tld?.join(", ")}</p>
								<p> Status: {country?.status}</p>
								<p> Borders: {country?.borders?.join(", ")}</p>
								<article className="mt-1 mb-4">
									<h2 className="text-xl font-bold ">Maps</h2>
									<div className="flex items-center gap-2">
										<Link href={country.maps.googleMaps} target="_blank">
											Google Maps
										</Link>
										<Link href={country.maps.openStreetMaps} target="_blank">
											Open Street Maps
										</Link>
									</div>
								</article>
							</ModalBody>
						</>
					)}
				</ModalContent>
			</HeroModal>
		</>
	);
}
