//Geral
import 'public/css/styles.min.css';
//Componentes
import 'public/css/barra_navegacao.min.css';
import 'public/css/card.min.css';
import 'public/css/card_competencia.min.css';
//Sections
import 'public/css/sobre.min.css';
import 'public/css/section_competencias.min.css';


import BarraNavegacao from './components/barra_navegacao';
import React from 'react';
import { Carrossel } from './components/carrossel';
import { Sobre } from './components/section_sobre';
import { SectionCompetencias } from './components/section_competencias';
import { SectionFuturo } from './components/section_futuro';

export default function Home() {
	return (
		<main>
			<div className='container'>
				<BarraNavegacao />
				<section id='section-profissoes'>
					<Carrossel cardImagem={true}/>
				</section>
				<section id='section-sobre'>
					<Sobre />
				</section>
				<section id='section-competencias'>
					<SectionCompetencias />
				</section>
				<section id='section-futuro'>
					<SectionFuturo />
				</section>
				<section>
					<Carrossel cardImagem={false}/>
				</section>
			</div>
		</main>
	);
}
