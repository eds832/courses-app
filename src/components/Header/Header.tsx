import React from 'react';

import './Header.css';
import Logo from './../../components/Header/components/Logo/Logo';
import Button from './../../common/Button/Button';
import UserName from './../../common/UserName/UserName';
import { LOGOUT_BUTTON_TEXT } from './../../constants';
import { HeaderProps } from './HeaderProps';

const Header: React.FC<HeaderProps> = (props) => {
	return (
		<header className='header'>
			<Logo />
			{localStorage.getItem('token') && (
				<div className='user-login'>
					<UserName name={localStorage.getItem('name')} />
					<Button onClick={props.onLogout} buttonText={LOGOUT_BUTTON_TEXT} />
				</div>
			)}
		</header>
	);
};

export default Header;
