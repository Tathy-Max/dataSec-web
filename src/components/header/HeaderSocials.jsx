import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
// import { FiDribble } from 'react-icons/fi';

const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a
				href="https://www.linkedin.com/company/datasecbr/"
				target="_blank"
				rel="noreferrer"
			>
				<BsLinkedin />
			</a>
			<a
				href="https://www.linkedin.com/company/datasecbr/"
				target="_blank"
				rel="noreferrer"
			>
				<FaGithub />
			</a>
			<a
				href="https://www.linkedin.com/company/datasecbr/"
				target="_blank"
				rel="noreferrer"
			>
				<FaGithub />
			</a>
		</div>
	);
};

export default HeaderSocials;
