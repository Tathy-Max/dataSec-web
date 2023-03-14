import React from 'react';
import './courses.css';
import Course1 from '../../assets/portfolio1.jpg';
import Course2 from '../../assets/portfolio2.jpg';
import Course3 from '../../assets/portfolio3.jpg';
import Course4 from '../../assets/portfolio4.jpg';
import Course5 from '../../assets/portfolio5.png';
import Course6 from '../../assets/portfolio6.jpg';

const Courses = () => {
	return (
		<section id="courses">
			<h5>O que voce vai aprender</h5>
			<h2>Cursos</h2>

			<div className="container courses__container">
				<article className="courses__item">
					<div className="courses__item-image">
						<img src={Course1} alt="" />
						<h3>Course Title</h3>
						<div className="courses__item-btn">
							<a
								href="https://www.datasec.com.br/"
								className="btn"
								target="_blank"
								rel="noreferrer"
							>
								DataSec
							</a>
							<a
								href="https://www.linkedin.com/learning/topics/amazon-web-services"
								className="btn btn-primary"
								target="blank"
								rel="noreferrer"
							>
								Live Demo
							</a>
						</div>
					</div>
				</article>
				<article className="courses__item">
					<div className="courses__item-image">
						<img src={Course2} alt="" />
						<h3>Course Title</h3>
						<div className="courses__item-btn">
							<a
								href="https://www.datasec.com.br/"
								className="btn"
								target="_blank"
								rel="noreferrer"
							>
								DataSec
							</a>
							<a
								href="https://www.linkedin.com/learning/topics/amazon-web-services"
								className="btn btn-primary"
								target="blank"
								rel="noreferrer"
							>
								Live Demo
							</a>
						</div>
					</div>
				</article>
				<article className="courses__item">
					<div className="courses__item-image">
						<img src={Course3} alt="" />
						<h3>Course Title</h3>
						<div className="courses__item-btn">
							<a
								href="https://www.datasec.com.br/"
								className="btn"
								target="_blank"
								rel="noreferrer"
							>
								DataSec
							</a>
							<a
								href="https://www.linkedin.com/learning/topics/amazon-web-services"
								className="btn btn-primary"
								target="blank"
								rel="noreferrer"
							>
								Live Demo
							</a>
						</div>
					</div>
				</article>
				<article className="courses__item">
					<div className="courses__item-image">
						<img src={Course4} alt="" />
						<h3>Course Title</h3>
						<div className="courses__item-btn">
							<a
								href="https://www.datasec.com.br/"
								className="btn"
								target="_blank"
								rel="noreferrer"
							>
								DataSec
							</a>
							<a
								href="https://www.linkedin.com/learning/topics/amazon-web-services"
								className="btn btn-primary"
								target="blank"
								rel="noreferrer"
							>
								Live Demo
							</a>
						</div>
					</div>
				</article>
				<article className="courses__item">
					<div className="courses__item-image">
						<img src={Course5} alt="" />
						<h3>Course Title</h3>
						<div className="courses__item-btn">
							<a
								href="https://www.datasec.com.br/"
								className="btn"
								target="_blank"
								rel="noreferrer"
							>
								DataSec
							</a>
							<a
								href="https://www.linkedin.com/learning/topics/amazon-web-services"
								className="btn btn-primary"
								target="blank"
								rel="noreferrer"
							>
								Live Demo
							</a>
						</div>
					</div>
				</article>
				<article className="courses__item">
					<div className="courses__item-image">
						<img src={Course6} alt="" />
						<h3>Course Title</h3>
						<div className="courses__item-btn">
							<a
								href="https://www.datasec.com.br/"
								className="btn"
								target="_blank"
								rel="noreferrer"
							>
								DataSec
							</a>
							<a
								href="https://www.linkedin.com/learning/topics/amazon-web-services"
								className="btn btn-primary"
								target="blank"
								rel="noreferrer"
							>
								Live Demo
							</a>
						</div>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Courses;
