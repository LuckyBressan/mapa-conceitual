import 'public/css/styles.min.css';
import 'public/css/barra_navegacao.min.css';
import 'public/css/card.min.css';
import BarraNavegacao from './components/barra_navegacao';
import React from 'react';
import { Card } from './components/card';

export default function Home() {
	return (
		<main>
			<div className='container'>
				<BarraNavegacao />
				<section>
					<Card title='teste' image='https://www.adventureclub.com.br/wp-content/uploads/2014/11/peru-1.jpg'/>
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
