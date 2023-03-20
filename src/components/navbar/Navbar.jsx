import React from 'react';
import './navbar.css';
import { AiFillHome } from 'react-icons/ai';
import { HiInformationCircle } from 'react-icons/hi';
import { FaLaptopCode } from 'react-icons/fa';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { useState } from 'react';

const Nav = () => {
	const [activeNav, setActiveNav] = useState('#');
	return (
		<nav>
			<div>
				<a
					href="#header"
					onclick={() => setActiveNav('#')}
					className={activeNav === '#' ? 'active' : ''}
				>
					<AiFillHome />
				</a>
				<h5>Home</h5>
			</div>
			<div>
				<a
					href="#about"
					onclick={() => setActiveNav('#about')}
					className={activeNav === '#about' ? 'active' : ''}
				>
					<HiInformationCircle />
				</a>
				<h5>About</h5>
			</div>
			<div className="text-icon">
				<a
					href="#tech"
					onclick={() => setActiveNav('#tech')}
					className={activeNav === '#tech' ? 'active' : ''}
				>
					<FaLaptopCode />
				</a>
				<h5>Technologies</h5>
			</div>
			<a
				href="#services"
				onclick={() => setActiveNav('#services')}
				className={activeNav === '#services' ? 'active' : ''}
			>
				<MdOutlineMiscellaneousServices />
			</a>

			<a
				href="#courses"
				onclick={() => setActiveNav('#services')}
				className={activeNav === '#services' ? 'active' : ''}
			>
				<FaChalkboardTeacher />
			</a>
			<a
				href="#testimonials"
				onclick={() => setActiveNav('#testimonials')}
				className={activeNav === '#testimonials' ? 'active' : ''}
			>
				<BsFillPeopleFill />
			</a>

			<a
				href="#contact"
				onclick={() => setActiveNav('#contact')}
				className={activeNav === '#contact' ? 'active' : ''}
			>
				<IoMdMail />
			</a>
		</nav>
	);
};

export default Nav;
