import React from 'react';
import './tech.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { FaAws } from 'react-icons/fa';

import { motion } from 'framer-motion';

const Tech = () => {
	return (
		<section id="tech">
			<h5>We've been using</h5>
			<h2>Technologies and Methodologies applied</h2>

			<motion.div
				className="container tech__container"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5, repeat: Infinity }}
				transition={{ duration: 2.5 }}
				variants={{
					hidden: { opacity: 0, y: -50 },
					visible: { opacity: 1, x: 0 },
				}}
			>
				<div className="tech__technology">
					<h3>Technologies</h3>
					<div className="tech__content">
						<article className="tech__details">
							<BsPatchCheckFill className="tech__details-icon" />
							<div>
								<h4>Microsoft</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="tech__details">
							<BsPatchCheckFill className="tech__details-icon" />
							<div>
								<h4>Linux</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="tech__details">
							<BsPatchCheckFill className="tech__details-icon" />
							<div>
								<h4>Cobit</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="tech__details">
							<BsPatchCheckFill className="tech__details-icon" />
							<div>
								<h4>Sophos</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="tech__details">
							<BsPatchCheckFill className="tech__details-icon" />
							<div>
								<h4>FortiNET</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
					</div>
				</div>
				<div className="tech__methodology">
					<h3>Methodologies</h3>
					<div className="tech__content">
						<article className="tech__details">
							<BsPatchCheckFill className="tech__details-icon" />
							<div>
								<h4>ITIL</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="tech__details">
							<BsPatchCheckFill className="tech__details-icon" />
							<div>
								<h4>NIST CSF</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="tech__details">
							<FaAws className="tech__details-icon" />
							<div>
								<h4>AWS</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="tech__details">
							<BsPatchCheckFill className="tech__details-icon" />
							<div>
								<h4>Tenable Nessus</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="tech__details">
							<BsPatchCheckFill className="tech__details-icon" />
							<div>
								<h4>Graylog</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default Tech;
