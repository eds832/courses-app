import React, { useState } from 'react';

import './Login.css';
import { LoginProps } from './LoginProps';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Button from './../../common/Button/Button';
import Input from './../../common/Input/Input';
import Header from '../Header/Header';
import {
	LOGIN_FORM_ACCOUTN_LINE_TEXT,
	PASSWORD_LABLE_TEXT,
	EMAIL_LABLE_TEXT,
	EMAIL_ERROR_MESSAGE,
	PASSWORD_ERROR_MESSAGE,
	LOGIN_BUTTON_TEXT,
	LOGIN_FORM_TITLE,
} from './../../constants';

const Login = ({ onLogin }: LoginProps) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [error, setError] = useState('');

	const navigate = useNavigate();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setEmailError('');
		setPasswordError('');
		setError('');
		if (!email) {
			setEmailError(EMAIL_ERROR_MESSAGE);
		}
		if (!password) {
			setPasswordError(PASSWORD_ERROR_MESSAGE);
		}
		if (!email || !password) {
			return;
		}
		const [loginSuccesful, message] = await onLogin(email, password);
		if (loginSuccesful) {
			navigate('/courses');
		} else {
			setError(message);
		}
	};

	return (
		<>
			{localStorage.getItem('token') && (
				<Navigate to='/courses' replace={true} />
			)}
			<Header />
			<div className='login-title'>
				<h2>{LOGIN_FORM_TITLE}</h2>
			</div>
			<div className='login-container'>
				<form className='login-form' onSubmit={handleSubmit}>
					<div className='email-input'>
						<Input
							onChange={(e) => setEmail(e)}
							value={email}
							type='email'
							labelText={EMAIL_LABLE_TEXT}
							error={emailError}
						/>
					</div>
					<div className='password-input'>
						<Input
							onChange={(e) => setPassword(e)}
							value={password}
							type='password'
							labelText={PASSWORD_LABLE_TEXT}
							error={passwordError}
						/>
						{error && <p className='error-message'>{error}</p>}
					</div>
					<div className='button-login'>
						<Button type='submit' buttonText={LOGIN_BUTTON_TEXT} />
						<p className='account-line'>{LOGIN_FORM_ACCOUTN_LINE_TEXT}</p>
						<Link to='/registration'>
							<p className='registration-link'>Registration</p>
						</Link>
					</div>
				</form>
			</div>
		</>
	);
};

export default Login;
