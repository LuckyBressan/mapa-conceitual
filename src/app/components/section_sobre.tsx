import React from 'react';

export const Sobre = () => {
	return(
		<div className='profissao-area'>
			<div className='profissao-area-text'>
				<div className='profissao-text'>
                    Um desenvolvedor <b>front-end</b> é um profissional responsável por criar a interface visual de um site ou aplicativo. Eles trabalham com linguagens de programação como <b>HTML, CSS e JavaScript</b> para desenvolver e otimizar a aparência e a funcionalidade das páginas web.
					<br />
					<br />
                    Além disso, os desenvolvedores <b>front-end</b> também utilizam ferramentas de desenvolvimento para depurar e testar suas criações, como a
					<b> visualização do DOM e a inspeção de elementos</b>. Essas ferramentas permitem que eles identifiquem e corrijam problemas, além de estudar o impacto da aplicação nos recursos de rede.
				</div>
			</div>
			<div className='profissao-area-imagem'>
				<img src="/images/sobre-front-end.jpg" />
			</div>
		</div>
	);
};