'use client';

import React, { ReactNode, useRef } from 'react';
import { Card } from './card';
import { ArrowIcon } from '../../../public/icons/carrossel_arrow_icon';

const cardsImagem = [
	{
		title: 'Dev Back-End',
		image: '/images/dev-back-end.jpg',
	},
	{
		title: 'Analista de Software',
		image: '/images/analista-software.jpg',
	},
	{
		title: 'Java Developer',
		image: '/images/java-developer.jpg',
	},
	{
		title: 'Dev Mobile',
		image: '/images/dev-mobile.jpg',
	},
	{
		title: 'Dev Front-End',
		image: '/images/dev-front-end.jpg',
	}
];

const cardsText = [
	{
		title: 'Crescimento contínuo da demanda',
		text: 'À medida que mais empresas buscam presença online e desenvolvem aplicativos para atender às necessidades dos usuários, a demanda por desenvolvedores front-end permanece alta.',
	},
	{
		title: 'Maior foco na experiência do usuário',
		text: 'A importância da experiência do usuário (UX) e da interface do usuário (UI) continua a crescer, colocando os desenvolvedores front-end no centro do esforço para criar interfaces intuitivas e agradáveis.',
	},
	{
		title: 'Adoção de tecnologias modernas',
		text: 'Frameworks e bibliotecas JavaScript, como React, Angular e Vue.js, estão se tornando cada vez mais padrão, e os desenvolvedores que dominam essas tecnologias podem ter uma vantagem significativa.',
	},
	{
		title: 'Mobile-First e Responsividade',
		text: 'Com o aumento do uso de dispositivos móveis, a criação de interfaces responsivas e otimizadas para dispositivos móveis é uma prioridade. Desenvolvedores front-end que compreendem e podem implementar designs "mobile-first" estão em alta demanda.',
	},
	{
		title: 'Progressive Web Apps (PWAs)',
		text: 'PWAs são aplicativos que combinam a melhor experiência de navegadores com a funcionalidade de aplicativos móveis. Desenvolvedores front-end que podem construir PWAs podem estar bem posicionados para o futuro.',
	},
	{
		title: 'Integração com AR e VR',
		text: 'À medida que AR e VR se tornam mais presentes em diversos setores, a integração dessas tecnologias nas interfaces web pode se tornar uma área de crescimento para desenvolvedores front-end.',
	},
	{
		title: 'Ênfase na Segurança',
		text: 'Com o aumento das preocupações com segurança na web, os desenvolvedores front-end podem se beneficiar ao entender e implementar práticas seguras, especialmente ao lidar com dados sensíveis do usuário.',
	},
	{
		title: 'Automação e Ferramentas de Desenvolvimento',
		text: 'A automação de tarefas rotineiras e o uso eficiente de ferramentas de desenvolvimento são habilidades cada vez mais valorizadas para aumentar a produtividade.',
	},
	{

		title: 'Evolução das Linguagens e Ferramentas',
		text: 'Como a tecnologia evolui, novas linguagens e ferramentas podem surgir. Estar aberto a aprender novas tecnologias e adaptar-se rapidamente é uma habilidade crucial.',
	},
	{
		title: 'Trabalho Remoto e Colaboração Global',
		text: 'A capacidade de colaborar efetivamente em equipes remotas é uma habilidade valiosa, especialmente considerando as mudanças no cenário de trabalho global.',
	}
];

interface CarrosselProps {
	cardImagem: true | false;
}

export const Carrossel = (Carrossel: CarrosselProps) => {
	let cont = 2;
	let translate = 0;
	const oAreaCards = useRef<HTMLDivElement>(null);

	/**
	 * Altera o card atual
	 * @param bNextCard
	 * @param translate
	 */
	function alteraCardAtual(bNextCard: boolean, translate: number) {
		let aCards: Array<Element>;
		aCards = [];
		if(oAreaCards.current) {
			aCards = [].slice.call(oAreaCards.current.children);
		}

		//Pega o card atual entre os filhos do área card
		const oCardAtual: Array<Element> = aCards.filter((oCard: Element) => {
			if(oCard.classList.contains('card-focus')) {
				oCard.classList.remove('card-focus');
				return oCard;
			}
		});

		if(bNextCard) {

			//Adiciona a classe de foco para o próximo elemento da hierarquia
			oCardAtual[0]?.nextElementSibling?.classList.add('card-focus');
		}
		else{
			//Adiciona a classe de foco para o elemento anterior da hierarquia
			oCardAtual[0]?.previousElementSibling?.classList.add('card-focus');
		}

		//Move a area dos cards horizontalmente para que o próximo card possa ficar no centro
		if(oAreaCards.current) {
			oAreaCards.current.style.transform = `translateX(${translate}%)`;
		}
	}

	const nextCard = () => {
		let iTranslateMaximo = -72;
		if(!Carrossel.cardImagem) {
			iTranslateMaximo = -86;
			if(translate > iTranslateMaximo) {
				if(translate == 0) {
					translate -= 6;
				}
				else{
					translate -= 10;
				}
				alteraCardAtual(true, translate);
			}
		}
		else{
			if(translate > iTranslateMaximo) {
				translate -= 20;
				alteraCardAtual(true, translate);
			}
		}
	};

	const previousCard = () => {
		let iTranslateMinimo = 0;
		if(!Carrossel.cardImagem) {
			iTranslateMinimo = 0;
			if(translate < iTranslateMinimo) {
				if(translate == -6) {
					translate = 0;
				}
				else{
					translate += 10;
				}
				alteraCardAtual(false, translate);
			}
		}
		else{
			if(translate < iTranslateMinimo) {
				translate += 20;
				alteraCardAtual(false, translate);
			}
		}
	};

	const getCards = () => {
		const CardsRetorno: Array<ReactNode> = [];
		if(Carrossel.cardImagem) {
			cardsImagem.map(card => {
				let sClass = '';
				if(cont == 2) {
					sClass = 'card-focus';
				}
				const ComponenteCard = <Card key={card.title} nameClass={sClass} title={card.title} image={card.image} column={cont} text={''} />;
				cont += 3;
				CardsRetorno.push(ComponenteCard);
			});
		}
		else{
			cardsText.map(card => {
				let sClass = 'card-futuro ';
				if(cont == 2) {
					sClass += 'card-focus';
				}
				const ComponenteCard = <Card key={card.title} nameClass={sClass} title={card.title} image={card.image} column={cont} text={card.text} />;
				cont += 3;
				CardsRetorno.push(ComponenteCard);
			});
		}
		return CardsRetorno;
	};


	return (
		<div className="carrossel-container">
			<div className='carrossel-area-arrows'>
				<span className='carrossel-arrow-container'>
					<button className='carrossel-arrow carrossel-arrow-left' onClick={previousCard}><ArrowIcon width={'5em'} height={'5em'} fill='white' /></button>
				</span>
				<span className='carrossel-arrow-container carrossel-arrow-container-left'>
					<button className='carrossel-arrow carrossel-arrow-right' onClick={nextCard}><ArrowIcon width={'5em'} height={'5em'} fill='white' /></button>
				</span>
			</div>
			<div className={`carrossel-area-cards ${!Carrossel.cardImagem ? ' carrossel-area-cards-futuro' : ''}`} ref={oAreaCards}>
				{getCards()}
			</div>
		</div>
	);
};
