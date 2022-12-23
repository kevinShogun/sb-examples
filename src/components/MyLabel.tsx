import "./MyLabel.css";

export interface MyLabelProps {
	/**
	 *  String a colocar
	 */
	label: string;
	/**
	 *  Tipo del tamaño de fuente a utilizar
	 */
	size?: "normal" | "h1" | "h2" | "h3";
	/**
	 *  Tipo de  color de fuente a utilizar
	 */
	color?: "primary" | "secondary" | "tertiary";
	/**
	 *  Todas mayusculas
	 */
	allCaps?: boolean;
	/**
	 *  Selector de colores personalizados
	 */
	fontColor?: string;
	/**
	 *  Selector de colores de fondo personalizados
	 */
	backgroundColor?: string;
}

export const MyLabel = ({
	allCaps = false,
	color = "primary",
	label = "no label",
	size = "normal",
	fontColor,
	backgroundColor = "transparent"
}: MyLabelProps) => {
	return (
		<span
			className={`label ${size}  text-${color} ${allCaps && "allCaps"}`}
			style={{
				color: fontColor,
				backgroundColor
			}}
		>
			{label}
		</span>
	);
};
