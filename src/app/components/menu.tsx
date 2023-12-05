import React from 'react';
import { MenuCloseIcon } from '../../../public/icons/menu_close_icon';
import { SiCanva } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';

interface MenuProps {
    isVisible: boolean;
    onClose: () => void;
}

export const Menu = ({isVisible, onClose}: MenuProps) => {
	return (
		<div className={`menu-container ${isVisible ? 'menu-container-visivel' : 'menu-container-oculto'}`}>
			<button className='menu-button-close' onClick={onClose}>
				<MenuCloseIcon fill='white' width={'2em'} height={'3em'} />
			</button>
			<div>
				<div className='menu-name-integrantes'>
					<h3>Integrantes</h3>
					<ul>
						<li>Jennifer Cristina Duwe</li>
						<li>Lucas Adriano Bressan</li>
						<li>Otávio Vinicius Prada</li>
					</ul>
				</div>
				<div>
					<h3>Matéria</h3>
					<ul>
						<li>Experiência Profissional: Carreira e Sucesso</li>
					</ul>
				</div>
				<div>
					<h3>Links</h3>
					<div className='menu-area-links'>
						<a href="https://www.canva.com/design/DAF01zpuQP8/UvESFoPGzkCVrey6w7yKNw/edit?utm_content=DAF01zpuQP8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target='_blank' rel="noreferrer"><SiCanva /></a>
						<a href="https://github.com/LuckyBressan/mapa-conceitual.git" target='_blank' rel="noreferrer"><FaGithub /></a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;