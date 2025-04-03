import { useState, type ImgHTMLAttributes } from "react";

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & { fallback: string };

export function Image(props: ImageProps) {
	const [src, setSrc] = useState(props.src);
	return (
		<>
			<img
				{...props}
				src={src}
				alt={props.alt}
				onError={() => setSrc(props.fallback)}
			/>
		</>
	);
}
