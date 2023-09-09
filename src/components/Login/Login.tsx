import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Login.css';
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
import { useAppDispatch } from './../../hooks';
import { loginUserThunk } from './../../store/user/thunk';
import { getUser } from './../../store/selectors';
import { deleteUserAction } from './../../store/user/actions';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [error, setError] = useState('');

	const dispatch = useAppDispatch();
	const err = useSelector(getUser)?.error;
	const [tried, setTried] = useState(0);

	useEffect(() => {
		if (tried && err) {
			setError(err);
		}
	}, [tried, err]);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(deleteUserAction());
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
		dispatch(loginUserThunk(email, password)).then(() => setTried(tried + 1));
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
