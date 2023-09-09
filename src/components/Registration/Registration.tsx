import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Registration.css';
import Button from './../../common/Button/Button';
import Input from './../../common/Input/Input';
import Header from '../Header/Header';
import {
	REGISTRATION_FORM_ACCOUTN_LINE_TEXT,
	PASSWORD_LABLE_TEXT,
	EMAIL_LABLE_TEXT,
	EMAIL_ERROR_MESSAGE,
	PASSWORD_ERROR_MESSAGE,
	NAME_LABLE_TEXT,
	NAME_ERROR_MESSAGE,
	LOGIN_BUTTON_TEXT,
	REGISTRATION_FORM_TITLE,
} from './../../constants';
import { getUser } from './../../store/selectors';
import { registerUserThunk } from './../../store/user/thunk';
import { useAppDispatch } from './../../hooks';
import { deleteUserAction } from './../../store/user/actions';

const Registration = () => {
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [nameError, setNameError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [error, setError] = useState('');

	const dispatch = useAppDispatch();
	const err = useSelector(getUser)?.error;
	const [tried, setTried] = useState(0);

	useEffect(() => {
		if (tried > 0) {
			setError(err);
			if (err === '') {
				navigate('/login');
				dispatch(deleteUserAction());
			}
		}
	}, [err, tried]);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setEmailError('');
		setPasswordError('');
		setNameError('');
		setError('');
		if (!name) {
			setNameError(NAME_ERROR_MESSAGE);
		}
		if (!email) {
			setEmailError(EMAIL_ERROR_MESSAGE);
		}
		if (!password) {
			setPasswordError(PASSWORD_ERROR_MESSAGE);
		}
		if (!email || !password || !name) {
			return;
		}
		dispatch(registerUserThunk(name, email, password)).then(() =>
			setTried(tried + 1)
		);
	};

	return (
		<>
			<Header />
			<div className='registration-title'>
				<h2>{REGISTRATION_FORM_TITLE}</h2>
			</div>
			<div className='registration-container'>
				<form className='registration-form' onSubmit={handleSubmit}>
					<div className='registration-name-input'>
						<Input
							onChange={(e) => setName(e)}
							value={name}
							type='text'
							labelText={NAME_LABLE_TEXT}
							error={nameError}
						/>
					</div>
					<div className='registration-email-input'>
						<Input
							onChange={(e) => setEmail(e)}
							value={email}
							type='email'
							labelText={EMAIL_LABLE_TEXT}
							error={emailError}
						/>
					</div>
					<div className='registration-password-input'>
						<Input
							onChange={(e) => setPassword(e)}
							value={password}
							type='password'
							labelText={PASSWORD_LABLE_TEXT}
							error={passwordError}
						/>
						{error && <p className='error-registration-message'>{error}</p>}
					</div>
					<div className='registration-button'>
						<Button type='submit' buttonText={LOGIN_BUTTON_TEXT} />
						<p className='account-line'>
							{REGISTRATION_FORM_ACCOUTN_LINE_TEXT}
							<Link to='/login'>
								<span className='login-link'>Login</span>
							</Link>
						</p>
					</div>
				</form>
			</div>
		</>
	);
};

export default Registration;
