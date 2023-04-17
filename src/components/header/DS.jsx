import React from 'react';
import CV from '../../assets/cv.pdf';

const DS = () => {
	return (
		<div className="ds">
			<a href={CV} download className="btn">
				Download Data Sheet
			</a>
			<a href="#contact" className="btn btn-primary">
				Fale Conosco
			</a>
		</div>
	);
};

export default DS;
