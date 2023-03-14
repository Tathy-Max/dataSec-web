import React from 'react';
import './about.css';
import ME from '../../assets/me2.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
	return (
		<section id="about">
			<h5>Get to know</h5>
			<h2>Sobre nos</h2>
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="About Logo" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experience</h5>
							<small>15+ Years Working</small>
						</article>

						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>Clientes</h5>
							<small>200+ Worldwide</small>
						</article>

						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Projetos</h5>
							<small>500+ Completed</small>
						</article>
					</div>

					<p>
						Profissionais experientes compromissados em levar os melhores
						serviços com valores justos e acessíveis. Acreditamos que os
						melhores processos, tecnologia e segurança de seus dados e operações
						são fundamentos primordiais para o negócio e portanto devem ser
						acessíveis a todos. Vasta experiência com softwares e plataformas
						tradicionais e Open Source.
					</p>

					<a href="#contact" className="btn btn-primary">
						Fale Conosco
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
