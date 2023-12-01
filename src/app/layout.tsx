import type { Metadata } from 'next';
import './globals.css';
import { PoppinsLeve } from '../../public/fonts/poppins';
import React from 'react';

export const metadata: Metadata = {
	title: 'Mapa Conceitual',
	description: 'Apresentação do Mapa Conceitual',
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<body className={PoppinsLeve.className}>{children}</body>
		</html>
	);
}
