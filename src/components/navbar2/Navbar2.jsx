import React, { useState } from 'react';
import './navbar2.css';
import Logo from '../../assets/logoDataSec.png';

function Navbar3() {
	const [active, setActive] = useState('nav__menu');
	const [icon, setIcon] = useState('nav__toggler');

	const navToggle = () => {
		if (active === 'nav__menu') {
			setActive('nav__menu nav__active');
		} else setActive('nav__menu');

		if (icon === 'nav__toggler') {
			setIcon('nav__toggler toggle');
		} else setIcon('nav__toggler');
	};

	return (
		<nav className="nav">
			<div>
				<a href="#header" className="nav__link">
					<img
						className="logo__img"
						width={50}
						height={50}
						src={Logo}
						alt="logo-datasec"
					/>
				</a>
			</div>

			<ul className={active}>
				<li className="nav__item"></li>
				<li className="nav__item">
					<a href="#about" className="nav__link">
						Sobre nós
					</a>
				</li>
				<li className="nav__item">
					<a href="#tech" className="nav__link">
						Experiencias
					</a>
				</li>
				<li className="nav__item">
					<a href="#services" className="nav__link">
						Serviços
					</a>
				</li>
				<li className="nav__item">
					<a href="#cursos" className="nav__link">
						Cursos
					</a>
				</li>
				<li className="nav__item">
					<a href="#testimonials" className="nav__link">
						Clientes
					</a>
				</li>
				<li className="nav__item">
					<a href="#contact" className="nav__link">
						Contato
					</a>
				</li>
			</ul>
			<div onClick={navToggle} className={icon}>
				<div className="line1"></div>
				<div className="line2"></div>
				<div className="line3"></div>
			</div>
		</nav>
	);
}

export default Navbar3;
