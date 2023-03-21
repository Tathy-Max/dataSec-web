import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

import { motion } from 'framer-motion';

const Services = () => {
	return (
		<section id="services">
			<h5>What we offer</h5>
			<h2>Servicos</h2>

			<motion.div
				className="container services__container"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, x: -50 },
					visible: { opacity: 1, x: 0 },
				}}
			>
				<article className="service">
					<div className="service__head">
						<h3>Consultoria para Defesa Cibernetica (SOC Advisor)</h3>
					</div>

					<ul className="service__list">
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Atuamos na implementação e revisão das melhores práticas de uso
								para Centros de Operações de Segurança (SOC) envolvendo
								Processos, Pessoas e Tecnologias de Segurança Cibernética.
							</p>
						</li>
					</ul>
				</article>

				<article className="service">
					<div className="service__head">
						<h3>Capacitação Especializada</h3>
					</div>

					<ul className="service__list">
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Portfólio de curso técnicos e gerenciais de Segurança
								Cibernética voltados aos públicos profissional e corporativo.
							</p>
						</li>
					</ul>
				</article>

				<article className="service">
					<div className="service__head">
						<h3>Arquitetura de Tecnologia e Segurança da Informação</h3>
					</div>

					<ul className="service__list">
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Auxiliamos o cliente a maximizar suas capacidades de tecnologia
								e proteção através do reposicionamento de seus elementos de
								proteção cibernética ou ainda desenhamos toda arquitetura de
								infraestrutura e segurança de TI com implantação e suporte das
								tecnologias envolvidas.
							</p>
						</li>
					</ul>
				</article>

				<article className="service">
					<div className="service__head">
						<h3>Consultoria em Governança Cibernética</h3>
					</div>

					<ul className="service__list">
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Auxiliamos o cliente através de consultorias pontuais ou
								contínuas para revisão, definição ou implantação de novos
								Processos e Gestão de Tecnologia e Segurança da Informação.
							</p>
						</li>
					</ul>
				</article>

				<article className="service">
					<div className="service__head">
						<h3>Monitoração de Segurança</h3>
					</div>

					<ul className="service__list">
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Efetuamos a monitoração online do seu ambiente de Tecnologia e
								Segurança da Informação, disparando alertas e atividades de
								remediação e proteção. Monitoração 24x7 automatizada.
							</p>
						</li>
					</ul>
				</article>

				<article className="service">
					<div className="service__head">
						<h3>Gerenciamento Seguro</h3>
					</div>

					<ul className="service__list">
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Implantação, suporte e gestão contínua de produtos de Segurança
								e Tecnologia da Informação como Antivírus, Firewalls, AntiSPAM,
								UTMs, Proxy, VPN, entre outros; além infraestrutura de TI como
								Servidores, Redes e Cloud.
							</p>
						</li>
					</ul>
				</article>
			</motion.div>
		</section>
	);
};

export default Services;
