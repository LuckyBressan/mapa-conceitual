import React from 'react';
//icons
import { FaHtml5 } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';
import { IoLogoReact } from 'react-icons/io5';
import { FaMobile } from 'react-icons/fa6';
import { FaGitAlt } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa6';
import { SiPhp } from 'react-icons/si';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';





import { CardCompetencias } from './card_competencias';
import { PoppinsExtraBold } from '../../../public/fonts/poppins';
import { UxIcon } from '../../../public/icons/user_experience_icon';


const aCompetencias = [
	{
		icon: <FaHtml5 />,
		title: 'HTML/CSS',
		text: ' Fundamentais para criar a estrutura e o estilo das páginas web.',
	},
	{
		icon: <IoLogoJavascript />,
		title: 'JavaScript',
		text: 'Essencial para adicionar interatividade e dinamismo às páginas web.',
	},
	{
		icon: <IoLogoReact />,
		title: 'Frameworks JS',
		text: 'Conhecimento em frameworks populares como React.js, Angular, ou Vue.js pode ser crucial para o desenvolvimento eficiente e escalável.',
	},
	{
		icon: <FaMobile />,
		title: 'Responsive Design',
		text: 'Habilidade para criar interfaces que se ajustam a diferentes tamanhos de tela, proporcionando uma experiência consistente em dispositivos variados.',
	},
	{
		icon: <FaGitAlt />,
		title: 'Version Control/Git',
		text: 'Conhecimento em sistemas de controle de versão, como o Git, é fundamental para colaboração e rastreamento de alterações no código.',
	},
	{
		icon: <FaSass />,
		title: 'Sass',
		text: 'Familiaridade com pré-processadores como Sass ou Less para facilitar a escrita e a manutenção do código CSS.',
	},
	{
		icon: <UxIcon width={'3em'} height={'2em'} />,
		title: 'UX/UI',
		text: 'Compreensão básica de design de usuário e interface é útil para criar interfaces mais intuitivas e agradáveis.',
	},
	{
		icon: <SiPhp />,
		title: 'Back-End',
		text: 'Uma compreensão básica de como o back-end funciona pode facilitar a colaboração com desenvolvedores back-end.',
	},
];

export const SectionCompetencias = () => {
	let iColumn = 1;
	let iRow = 1;

	return (
		<div className="competencias-area">
			<div className='competencias-area-title'>
				<h1 className={PoppinsExtraBold.className}>Competências</h1>
			</div>
			<div className="competencias-area-cards">
				{aCompetencias.map((oCompetencia) => {
					if(iColumn > 4) {
						iColumn = 1;
						iRow++;
					}
					const oCardCompetencia = <CardCompetencias key={oCompetencia.title} row={iRow} column={iColumn}  icon={oCompetencia.icon} title={oCompetencia.title} text={oCompetencia.text}/>;
					iColumn++;
					return oCardCompetencia;
				})}
				<div className='competencias-ver-mais'>
                    Ver Mais
                    &nbsp;
					<MdOutlineKeyboardDoubleArrowRight />
				</div>
			</div>
		</div>
	);
};