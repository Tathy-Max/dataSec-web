import React from 'react';
import './header.css';
import DS from './DS';
import LOGO from '../../assets/logoDataSec.png';
import HeaderSocials from './HeaderSocials';

function Header() {
	return (
		<header>
			<div className="container header__container">
				<h5>Computer and Network Security - Sao Paulo-SP</h5>
				<h1>TECNOLOGIA E SEGURANCA CIBERNETICA ACESSIVEL</h1>
				<h5 className="text-light">
					Projetos e servicos de Tecnologia e Seguranca cibernetica
				</h5>
				<DS />
				<HeaderSocials />
				<div className="logo">
					<img src={LOGO} alt="dataSec" />
				</div>
				<a href="#contact" className="scroll__down">
					Scroll Down
				</a>
			</div>
		</header>
	);
}

export default Header;
