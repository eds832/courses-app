import React from 'react';

import './Button.css';
import { ButtonProps } from './ButtonProps';

const Button: React.FC<ButtonProps> = (props) => (
	<button className='button' onClick={props.onClick} type={props.type}>
		{props.buttonText}
	</button>
);

export default Button;
