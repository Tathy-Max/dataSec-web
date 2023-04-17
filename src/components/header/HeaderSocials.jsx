import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';

const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a
				href="https://www.linkedin.com/company/datasecbr/"
				target="_blank"
				rel="noreferrer"
			>
				<BsLinkedin className="header__socials__img" />
			</a>
			<a
				href="https://www.linkedin.com/company/datasecbr/"
				target="_blank"
				rel="noreferrer"
			>
				<BsTwitter className="header__socials__img" />
			</a>
			<a
				href="https://www.linkedin.com/company/datasecbr/"
				target="_blank"
				rel="noreferrer"
			>
				<BsYoutube className="header__socials__img" />
			</a>
		</div>
	);
};

export default HeaderSocials;
