'use client';

import React, { useRef } from 'react';
import { Card } from './card';
import { ArrowIcon } from '../../../public/icons/carrossel_arrow_icon';
import { render } from 'react-dom';

const cards = [
	{
		title: 'Dev Back-End',
		image: 'https://img.freepik.com/fotos-gratis/computador-laptop-cinza-ligado_400718-47.jpg?w=1380&t=st=1701468814~exp=1701469414~hmac=c7101055d329ed26b5cd800898c16aa84cbb67049470ba19425f574cc36fd6f2',
	},
	{
		title: 'Analista de Software',
		image: 'https://img.freepik.com/fotos-gratis/computador-laptop-cinza-ligado_400718-47.jpg?w=1380&t=st=1701468814~exp=1701469414~hmac=c7101055d329ed26b5cd800898c16aa84cbb67049470ba19425f574cc36fd6f2',
	},
	{
		title: 'Java Developer',
		image: 'https://img.freepik.com/fotos-gratis/computador-laptop-cinza-ligado_400718-47.jpg?w=1380&t=st=1701468814~exp=1701469414~hmac=c7101055d329ed26b5cd800898c16aa84cbb67049470ba19425f574cc36fd6f2',
	},
	{
		title: 'Dev Mobile',
		image: 'https://img.freepik.com/fotos-gratis/computador-laptop-cinza-ligado_400718-47.jpg?w=1380&t=st=1701468814~exp=1701469414~hmac=c7101055d329ed26b5cd800898c16aa84cbb67049470ba19425f574cc36fd6f2',
	},
	{
		title: 'Dev Front-End',
		image: 'https://img.freepik.com/fotos-gratis/computador-laptop-cinza-ligado_400718-47.jpg?w=1380&t=st=1701468814~exp=1701469414~hmac=c7101055d329ed26b5cd800898c16aa84cbb67049470ba19425f574cc36fd6f2',
	}
];

export const Carrossel = () => {
	let cont = 2;
	let translate = 10;
	const oAreaCards = useRef(null);

	const nextCard = () => {
		if(translate > -90) {
			translate -= 25;
			oAreaCards.current.style.transform = `translateX(${translate}%)`;
		}
	};

	const previousCard = () => {
		if(translate < 10) {
			translate += 25;
			oAreaCards.current.style.transform = `translateX(${translate}%)`;
		}
	};

	return(
		<div className="carrossel-container">
			<div className='carrossel-area-arrows'>
				<span className='carrossel-arrow-container'>
					<button className='carrossel-arrow carrossel-arrow-left' onClick={previousCard}><ArrowIcon width={'5em'} height={'5em'} fill='white' /></button>
				</span>
				<span className='carrossel-arrow-container carrossel-arrow-container-left'>
					<button className='carrossel-arrow carrossel-arrow-right' onClick={nextCard}><ArrowIcon width={'5em'} height={'5em'} fill='white' /></button>
				</span>
			</div>
			<div className='carrossel-area-cards' ref={oAreaCards}>
				{cards.map(card => {
					// eslint-disable-next-line react/jsx-key
					const ComponenteCard = <Card title={card.title} image={card.image} column={cont} />;
					cont += 3;
					return ComponenteCard;
				})}

			</div>
		</div>
	);
};