import React from 'react';
import './testimonials.css';
import Client1 from '../../assets/Cyberscopic.png';
import Client2 from '../../assets/avatar2.jpg';
import Client3 from '../../assets/Lite-Service.png';

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
	{
		avatar: Client1,
		name: 'Henrique Reis (Fundador)',
		review:
			'Nossa empresa confiou e escolheu a Datasec para atender às nossas necessidades de Cyber ao longo de muitos anos. Sua missão é garantir nosso papel de líder na indústria da tecnologia. Além disso, é muito prazeroso trabalhar com eles.',
	},
	{
		avatar: Client2,
		name: 'Lucas Marques (Fundador)',
		review:
			'Gostaria de deixar aqui meu agradecimento e satisfação de ter essa parceria, através dos serviços da Datasec foi possível adicionar novos produtos ao nosso portfólio e agregar ainda mais valor aos nossos clientes. Obrigado pela parceria.',
	},
	{
		avatar: Client3,
		name: 'Vinícius Pinheiro (Sócio)',
		review:
			'A Datasec nos ajudou a transformar nossa empresa. Com ótimo custo x beneficio de soluções que elevaram nosso nível de processos internos e Cyber Services. Hoje temos serviços para oferecer a todos nossos clientes e atender todas as expectativas.',
	},
];

const Testimonials = () => {
	return (
		<section id="testimonials">
			<h5>O que os nossos clientes falam sobre nos</h5>
			<h2>Casos de Sucesso</h2>

			<Swiper
				className="container testimonials__container"
				// install Swiper modules
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{data.map(({ avatar, name, review }, index) => {
					return (
						<SwiperSlide key={index} className="testimonials">
							<div className="client__avatar">
								<image src={avatar} alt="client logo" />
							</div>
							<h5 className="client__name">{name}</h5>
							<small className="client__review">{review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;
