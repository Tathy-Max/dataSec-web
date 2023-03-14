import React from 'react';
import './navbar.css';
import { AiFillHome } from 'react-icons/ai';
import { HiInformationCircle } from 'react-icons/hi';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { useState } from 'react';

const Nav = () => {
	const [activeNav, setActiveNav] = useState('#');
	return (
		<nav>
			<a
				href="#"
				onclick={() => setActiveNav('#')}
				className={activeNav === '#' ? 'active' : ''}
			>
				<AiFillHome />
			</a>
			<a
				href="#about"
				onclick={() => setActiveNav('#about')}
				className={activeNav === '#about' ? 'active' : ''}
			>
				<HiInformationCircle />
			</a>
			<a
				href="#services"
				onclick={() => setActiveNav('#services')}
				className={activeNav === '#services' ? 'active' : ''}
			>
				<MdOutlineMiscellaneousServices />
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
