import { useEffect, useState } from "react";
import "./MyCarrousel.css";

type imgPropiedad = {
	img: string;
	alt: string;
	text: string;
};

export interface MyCarrouselProps {
	/**
     *  cantidad de imagenes a mostrar en el carrousel
     */
	cantImage?: number;
}

const imagesPropiedades: imgPropiedad[] = [
	{
		img: "https://polpo-assets.s3.amazonaws.com/production/+Neocasa-FrontOffice/Propiedades/Imagen+1_slider+propiedades.jpg",
		alt: "Neocasa living room",
		text: "1",
	},
	{
		img: "https://polpo-assets.s3.amazonaws.com/production/+Neocasa-FrontOffice/Propiedades/Imagen+2_slider+propiedades.jpg",
		alt: "Neocasa first home",
		text: "2",
	},
	{
		img: "https://polpo-assets.s3.amazonaws.com/production/+Neocasa-FrontOffice/Propiedades/Imagen+3_slider+propiedades.jpg",
		alt: "Neocasa second home",
		text: "3",
	},
	{
		img: "https://polpo-assets.s3.amazonaws.com/production/+Neocasa-FrontOffice/Propiedades/Imagen_Propiedad+4.jpg",
		alt: "Neocasa living room",
		text: "4",
	},
	{
		img: "https://polpo-assets.s3.amazonaws.com/production/+Neocasa-FrontOffice/Propiedades/Imagen+4_slider+propiedades.jpg",
		alt: "Neocasa first home",
		text: "5",
	},
	{
		img: "https://polpo-assets.s3.amazonaws.com/production/+Neocasa-FrontOffice/Propiedades/Imagen+3_slider+propiedades.jpg",
		alt: "Neocasa second home",
		text: "6",
	},

	{
		img: "https://polpo-assets.s3.amazonaws.com/production/+Neocasa-FrontOffice/Propiedades/Imagen+4_slider+propiedades.jpg",
		alt: "Neocasa first home",
		text: "7",
	},
	{
		img: "https://polpo-assets.s3.amazonaws.com/production/+Neocasa-FrontOffice/Propiedades/Imagen+3_slider+propiedades.jpg",
		alt: "Neocasa second home",
		text: "8",
	},
];

export const MyCarrousel = ({ 
	cantImage = 3
 }: MyCarrouselProps) => {
const circulos = (imagesPropiedades.length) - (cantImage - 1);

	const [propiedades, setPropiedades] = useState<imgPropiedad[]>([]);
	const [currentCircle, setCurrentCircle] = useState<number>(0);
	const [count, setCount] = useState(0);
	let botones: Array<JSX.Element> = [];

	const newImages = (c: number) => {
		setCurrentCircle(c);
		let newPropiedades: imgPropiedad[] = [];
		for (let i = c; i < c + 3; i++) {
			newPropiedades.push(imagesPropiedades[i]);
		}
		setCount(c);
	};

	useEffect(() => {
		const id = setInterval(() => setCount((oldCount) => oldCount + 1), 3500);

		if (count >= circulos) {
			// console.log("count", count);
			setCount(0);
			return () => {
				clearInterval(id);
			};
		}
		// setcurrentCita(citas[count]);
		setPropiedades(imagesPropiedades.slice(count, count + cantImage));
		setCurrentCircle(count === imagesPropiedades.length - 2 ? 0 : count);
		return () => {
			clearInterval(id);
		};
	}, [count, imagesPropiedades, cantImage]);

	for (let c = 0; c < circulos; c++) {
		botones.push(
			<button
				key={c}
				className={` buttons ${
					c === currentCircle ? "borderYellow" : "borderGray"
				}`}
				onClick={() => newImages(c)}
			></button>
		);
	}
	return (
		<div className="p-content container">
			<h4 className="title">featured</h4>
			<div className="containerFlex">
				{propiedades.map((p, index) => (
					<div key={index} className="cardImage">
						<div className="overlay"></div>
							<p className="cardText">{p.text}</p>
							<img src={p.img} alt={p.alt} />
					</div>
				))}
			</div>
			<div>{botones}</div>

			<br />
			<button type={"button"} className="black-bottom ">
				See
			</button>
		</div>
	);
};
