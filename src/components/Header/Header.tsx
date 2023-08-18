import React, { useState } from 'react';

import Logo from './../../components/Header/components/Logo/Logo';
import Button from './../../common/Button/Button';
import UserName from './../../common/UserName/UserName';

import './Header.css';

import { LOGIN_BUTTON_TEXT, LOGOUT_BUTTON_TEXT } from './../../constants';

const Header: React.FC = () => {
	const [loginState, setState] = useState({
		buttonName: LOGOUT_BUTTON_TEXT,
		userName: 'Harry Potter',
	});

	const changeState = () => {
		if (loginState.buttonName !== LOGIN_BUTTON_TEXT) {
			setState({ buttonName: LOGIN_BUTTON_TEXT, userName: '' });
		} else {
			setState({ buttonName: LOGOUT_BUTTON_TEXT, userName: 'Harry Potter' });
		}
	};

	return (
		<header className='header'>
			<Logo />
			<div className='user-login'>
				<UserName name={loginState.userName} />
				<Button
					onClick={() => changeState()}
					buttonText={loginState.buttonName}
				/>
			</div>
		</header>
	);
};

export default Header;
