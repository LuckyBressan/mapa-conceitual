import React, { ReactElement } from 'react';
import { PoppinsBold } from '../../../public/fonts/poppins';

interface CardCompetenciaProps {
    icon: ReactElement,
    title: string,
    text: string,
    column: number,
    row: number,
}

export const CardCompetencias = (CardCompetencia: CardCompetenciaProps) => {
	return (
		<div className="card-competencia-corpo" style={{gridColumn: CardCompetencia.column, gridRow: CardCompetencia.row}}>
			<div className='card-competencia-fundo'></div>
			<div className="card-competencia-icon">
				{CardCompetencia.icon}
			</div>
			<div className="card-competencia-title">
				<h3 className={PoppinsBold.className}><b>{CardCompetencia.title}</b></h3>
			</div>
			<div className="card-competencia-text">
				{CardCompetencia.text}
			</div>
		</div>
	);
};