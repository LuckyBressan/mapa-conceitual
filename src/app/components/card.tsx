import React from 'react';
import { PoppinsBold } from '../../../public/fonts/poppins';


interface CardProps {
    image: string;
    title: string;
	column: number;
	nameClass: string;
	text: string;
}

export const Card = (card: CardProps) => {

	function getImage() {
		if(card.image) {
			return <img src={card.image} className='card-image' />;
		}
		else {
			return <div className='card-background-color' ></div>;
		}
	}

	function getText() {
		if(!card.image) {
			return <span className='card-text'><p>{card.text}</p></span>;
		}
	}

	return(
		<div className={`card-container ${card.nameClass}`} style={{gridColumn: `${card.column}`}}>
			<div className='card-area-geral'>
				{getImage()}
				<div className='card-area-text'>
					<span className='card-title'><h3 className={`${PoppinsBold.className}`}>{card.title}</h3></span>
					{getText()}
				</div>
			</div>
		</div>
	);
};