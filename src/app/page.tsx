import 'public/css/styles.min.css';
import 'public/css/barra_navegacao.min.css';
import 'public/css/card.min.css';
import BarraNavegacao from './components/barra_navegacao';
import React from 'react';
import { Carrossel } from './components/carrossel';

export default function Home() {
	return (
		<main>
			<div className='container'>
				<BarraNavegacao />
				<section id='section-profissoes'>
					<Carrossel />
				</section>
				<section>
          profissão escolhida
				</section>
				<section>
          competências
				</section>
				<section>
          possibilidades futuras
				</section>
				<footer>
          footer
				</footer>
			</div>
		</main>
	);
}
