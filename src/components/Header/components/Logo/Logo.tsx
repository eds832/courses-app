import React from 'react';

import logo from './../../../../assets/logo.jpg';

import './Logo.css';

const Logo: React.FC = () => {
	return (
		<div className='logo'>
			<img src={logo} alt='Logo' />
		</div>
	);
};

export default Logo;
