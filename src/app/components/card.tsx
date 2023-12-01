import React from 'react';
import { PoppinsBold } from '../../../public/fonts/poppins';

interface CardProps {
    image: string;
    title: string;
}

export const Card = (card: CardProps) => {
	return(
		<div className='card-container'>
			<div style={{ backgroundImage: `url(${card.image})` }} className='card-image'>
				<div className='card-area-text'>
					<div className='card-background-color'></div>
					<span className='card-text'><h3 className={`${PoppinsBold.className}`}>{card.title}</h3></span>
				</div>
			</div>
		</div>
	);
};