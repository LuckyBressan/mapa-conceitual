'use client';
import Link from 'next/link';
import { MenuIcon } from '../../../public/icons/menu_icon';
import { JavaScriptIcon } from '../../../public/icons/js_icon';
import { PoppinsBold } from '../../../public/fonts/poppins';
import React, { useCallback, useState } from 'react';
import Menu from './menu';

export const BarraNavegacao = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const openMenu = useCallback(() => {
		setIsMenuOpen(true);
	}, []);

	const closeMenu = useCallback(() => {
		setIsMenuOpen(false);
	}, []);

	return (
		<nav className='barra-navegacao'>
			<span className='barra-navegacao-area-logo'>
				<JavaScriptIcon width={'3em'} height={'3em'} fill="white" />
			</span>
			<span className={`barra-navegacao-links ${PoppinsBold.className}`}>
				<Link href="#section-profissoes">Profissões</Link>
				<Link href="#section-sobre">Sobre</Link>
				<Link href="#section-competencias">Competências</Link>
				<Link href="#section-futuro">Futuro</Link>
			</span>
			<button className='barra-navegacao-menu' onClick={openMenu}>
				<MenuIcon width={'2em'} height={'2em'} fill="white"/>
			</button>
			<Menu isVisible={isMenuOpen} onClose={closeMenu}/>
		</nav>
	);
};

export default BarraNavegacao;