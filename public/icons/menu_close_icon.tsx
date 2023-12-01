import React, { SVGProps } from 'react';

export const MenuCloseIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			{...props}
			strokeWidth="0"
			viewBox="0 0 512 512"
			xmlns="http://www.w3.org/2000/svg"
			stroke="currentColor"
		>
			<path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
		</svg>
	);
};