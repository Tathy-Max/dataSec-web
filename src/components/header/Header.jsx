import React from 'react';
import './header.css';
import DS from './DS';
import LOGO from '../../assets/logoDataSec.png';
import HeaderSocials from './HeaderSocials';

function Header() {
	return (
		<header>
			<div id="header" className="container header__container">
				<div className="header__text">
					{/* <h5>Computer and Network Security - Sao Paulo-SP</h5> */}
					<p>SOC ADVISORY</p>
					<h3>
						Consultoria especializada na criacao, transformacao <br></br>e
						maturidade da operacao de seguranca da sua empresa
					</h3>
					<DS />
					<HeaderSocials />
				</div>

				<a href="#contact" className="scroll__down">
					Scroll Down
				</a>
			</div>
		</header>
	);
}

export default Header;
