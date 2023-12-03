import React from 'react';
import { PoppinsBold } from '../../../public/fonts/poppins';

interface CardProps {
    image: string;
    title: string;
	column: number;
	nameClass: string
}

export const Card = (card: CardProps) => {

	return(
		<div className={`card-container ${card.nameClass}`} style={{gridColumn: `${card.column}`}}>
			<div className='card-area-geral'>
				<img src={`${card.image}`} className='card-image' />
				<div className='card-area-text'>
					<span className='card-text'><h3 className={`${PoppinsBold.className}`}>{card.title}</h3></span>
				</div>
			</div>
		</div>
	);
};