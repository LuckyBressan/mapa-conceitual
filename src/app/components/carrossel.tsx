'use client';

import React, { useRef } from 'react';
import { Card } from './card';
import { ArrowIcon } from '../../../public/icons/carrossel_arrow_icon';

const cards = [
	{
		title: 'Dev Back-End',
		image: 'https://img.freepik.com/fotos-gratis/computador-laptop-cinza-ligado_400718-47.jpg?w=1380&t=st=1701481354~exp=1701481954~hmac=4a3565ae658142e2e764de4f21585d450ba6d8fa0980863b07907cb32a119c1d',
	},
	{
		title: 'Analista de Software',
		image: 'https://img.freepik.com/fotos-gratis/homem-trabalhando-a-noite_1098-12798.jpg?w=1380&t=st=1701481594~exp=1701482194~hmac=e86d9b3ba6057ccba7cc86a6ac13f17343e18375239d35253d16a2f6dfe8bf88',
	},
	{
		title: 'Java Developer',
		image: 'https://img.freepik.com/fotos-gratis/conceito-de-colagem-de-html-e-css-com-pessoa_23-2150062008.jpg?w=1380&t=st=1701481490~exp=1701482090~hmac=78afc1108ff9703ee88cbabedf44300fccb55fdd3003a92825bfc733c73b99d8',
	},
	{
		title: 'Dev Mobile',
		image: 'https://img.freepik.com/fotos-gratis/representacoes-da-experiencia-do-usuario-e-design-de-interface_23-2150104494.jpg?w=1380&t=st=1701481396~exp=1701481996~hmac=0b8368f020cbc525e529986a746305212917e680f396d0f5242b148b0c7daff1',
	},
	{
		title: 'Dev Front-End',
		image: 'https://img.freepik.com/fotos-gratis/plano-de-fundo-de-programacao-com-pessoa-trabalhando-com-codigos-no-computador_23-2150010130.jpg?w=1380&t=st=1701481697~exp=1701482297~hmac=3fd650c516ea496ac28aa262841c87178e6ddbb0e17ac7bbc7439fc8d08111de',
	}
];

export const Carrossel = () => {
	let cont = 2;
	let translate = 8;
	const oAreaCards = useRef(null);

	/**
	 * Altera o card atual
	 * @param bNextCard
	 * @param translate
	 */
	function alteraCardAtual(bNextCard: boolean, translate: number) {
		const aCards: Array<Element> = [].slice.call(oAreaCards.current.children);

		//Pega o card atual entre os filhos do área card
		const oCardAtual: Array<Element> = aCards.filter((oCard: Element) => {
			if(oCard.classList.contains('card-focus')) {
				oCard.classList.remove('card-focus');
				return oCard;
			}
		});

		if(bNextCard) {
			//Adiciona a classe de foco para o próximo elemento da hierarquia
			oCardAtual[0].nextSibling.classList.add('card-focus');
		}
		else{
			//Adiciona a classe de foco para o elemento anterior da hierarquia
			oCardAtual[0].previousSibling.classList.add('card-focus');
		}

		//Move a area dos cards horizontalmente para que o próximo card possa ficar no centro
		oAreaCards.current.style.transform = `translateX(${translate}%)`;
	}

	const nextCard = () => {
		if(translate > -72) {
			translate -= 20;
			alteraCardAtual(true, translate);
		}
	};

	const previousCard = () => {
		if(translate < 8) {
			translate += 20;
			alteraCardAtual(false, translate);
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
					let sClass = '';
					if(cont == 2) {
						sClass = 'card-focus';
					}
					const ComponenteCard = <Card key={card.title} nameClass={sClass} title={card.title} image={card.image} column={cont} />;
					cont += 3;
					return ComponenteCard;
				})}

			</div>
		</div>
	);
};