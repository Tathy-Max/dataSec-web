import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
	return (
		<footer>
			<a href="#header" className="footer__logo">
				DataSec
			</a>
			<ul className="permalinks">
				<li>
					<a href="#about">Sobre nós</a>
				</li>
				<li>
					<a href="#about">Experiencias</a>
				</li>
				<li>
					<a href="#tech">Serviços</a>
				</li>
				<li>
					<a href="#services">Cursos</a>
				</li>
				<li>
					<a href="#courses">Clientes</a>
				</li>
				<li>
					<a href="#testimonials">Contato</a>
				</li>
			</ul>

			<div className="footer__socials">
				<a href="https://www.linkedin.com/company/datasecbr/" target="blank">
					<IoLogoTwitter />
				</a>
				<a href="https://www.linkedin.com/company/datasecbr/">
					<BsLinkedin />
				</a>
				<a href="https://www.linkedin.com/company/datasecbr/">
					<FaFacebookF />
				</a>
			</div>
			<div className="footer__contact">
				<h4 className="font-bold">Fale Conosco</h4>
				<p className="my-5">contato@datasec.com.br</p>
				<p>+55(11)3777-6149</p>
			</div>
			<div className="footer__copyright">
				<small>&copy; DataSec. All rights reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;
