import React from 'react';

import './Input.css';
import { InputProps } from './InputProps';

const Input: React.FC<InputProps> = ({
	value,
	onChange,
	onKeyDown,
	inputId,
	labelText,
	type,
	error,
	size,
	pattern,
}) => {
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};

	const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		onKeyDown?.(event);
	};

	return (
		<div className='input-wrapper'>
			<label htmlFor={inputId}>
				{labelText}
				<input
					id={inputId}
					value={pattern ? (value.match(pattern) ? value : '') : value}
					onChange={handleInputChange}
					onKeyDown={handleInputKeyDown}
					type={type ? type : 'text'}
					className={error ? 'input-error' : ''}
					size={size ? size : 20}
					pattern={pattern}
				/>
				<p className='error-message'>{error}</p>
			</label>
		</div>
	);
};

export default Input;
