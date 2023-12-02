import React, { SVGProps } from 'react';

export const ArrowIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			{...props}
			strokeWidth="0"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			stroke="currentColor"
		>
			<path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
		</svg>
	);
};