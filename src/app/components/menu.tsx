import React from 'react';
import { MenuCloseIcon } from '../../../public/icons/menu_close_icon';

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
				<h3>Integrantes</h3>
				<div className='menu-name-integrantes'>
					<ul>
						<li>Jennifer Cristina Duwe</li>
						<li>Lucas Adriano Bressan</li>
						<li>Otávio Vinicius Prada</li>
					</ul>
				</div>
				<h3>Matéria</h3>
				<ul>
					<li>Experiência Profissional: Carreira e Sucesso</li>
				</ul>
			</div>
		</div>
	);
};

export default Menu;