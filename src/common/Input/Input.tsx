import React from 'react';

import './Input.css';
import { InputProps } from './InputProps';

const Input: React.FC<InputProps> = ({
	value,
	onChange,
	onKeyDown,
	inputId,
	labelText,
}) => {
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};

	const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		onKeyDown?.(event);
	};

	return (
		<div className='input-wrapper'>
			<label htmlFor={inputId}>{labelText}</label>
			<input
				id={inputId}
				type='text'
				value={value}
				onChange={handleInputChange}
				onKeyDown={handleInputKeyDown}
			/>
		</div>
	);
};

export default Input;
