import React from 'react';
import './contact.css';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';

import { useForm } from 'react-hook-form';

const Contact = () => {
	const {
		register,
		trigger,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async (e) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
			// e.target.reset();
			// reset();
		}
	};

	return (
		<section id="contact">
			<h5>Get in touch</h5>
			<h2>Contact us</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineMarkEmailUnread className="contact__option-icon" />
						<h4>Email</h4>
						<h5>contato@datasec.com</h5>
						<a
							href="mailto:contato@datasec.com.br"
							target="_blank"
							rel="noreferrer"
						>
							Send a message
						</a>
					</article>
					<article className="contact__option">
						<AiOutlineLinkedin className="contact__option-icon" />
						<h4>Linkedin</h4>
						<h5>DataSec on LinkedIn</h5>
						<a
							href="https://www.linkedin.com/company/datasecbr/"
							target="_blank"
							rel="noreferrer"
						>
							Send a message
						</a>
					</article>
					<article className="contact__option">
						<BsWhatsapp className="contact__option-icon" />
						<h4>WhatsApp</h4>
						<h5>+55 11 3777-6149</h5>
						<a
							href="https://api.whatsapp.com/send?phone=+551137776149"
							target="_blank"
							rel="noreferrer"
						>
							Send a message
						</a>
					</article>
				</div>
				<form
					target="_blank"
					onSubmit={onSubmit}
					action="https://formsubmit.co/3a5c8859417a8e17ba74136a9a7d7e84"
					method="POST"
				>
					<input
						type="text"
						name="name"
						placeholder="Escreva aqui seu nome completo"
						{...register('name', {
							required: true,
							maxLength: 100,
						})}
					/>
					{errors.name && (
						<p>
							{errors.name.type === 'required' && 'Esse campo é obrigatório.'}
							{errors.name.type === 'maxLength' &&
								'Tamanho maximo é 100 caracteres.'}
						</p>
					)}
					<input
						type="email"
						name="email"
						placeholder="Escreva aqui seu email"
						{...register('email', {
							required: true,
							pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						})}
					/>
					{errors.email && (
						<p>
							{errors.email.type === 'required' && 'Esse campo é obrigatório.'}
							{errors.email.type === 'pattern' && 'Email invalido.'}
						</p>
					)}
					<textarea
						name="message"
						rows="7"
						placeholder="Escreva aqui sua mensagem"
						{...register('message', {
							required: true,
							maxLength: 2000,
						})}
					/>
					{errors.message && (
						<p>
							{errors.message.type === 'required' &&
								'Esse campo é obrigatório.'}
							{errors.message.type === 'maxLength' &&
								'Tamanho maximo é 2000 caracteres.'}
						</p>
					)}
					<button
						type="submit"
						className="btn btn-primary"
						onClick={() => {
							reset();
						}}
					>
						Enviar Mensagem
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
