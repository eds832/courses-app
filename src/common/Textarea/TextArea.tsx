import React from 'react';

import { TextAreaProps } from './TextAreaProps';

const TextArea: React.FC<TextAreaProps> = ({
	value,
	onChange,
	onKeyDown,
	inputId,
	labelText,
	error,
	rows,
	cols,
}) => {
	const handleTextAreaChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		onChange(event.target.value);
	};

	const handleTextAreaKeyDown = (
		event: React.KeyboardEvent<HTMLTextAreaElement>
	) => {
		onKeyDown?.(event);
	};

	return (
		<div className='textarea-wrapper'>
			<label htmlFor={inputId}>
				{labelText}
				<textarea
					id={inputId}
					value={value}
					onChange={handleTextAreaChange}
					onKeyDown={handleTextAreaKeyDown}
					className={error ? 'input-error' : ''}
					rows={rows}
					cols={cols}
				/>
				<p className='error-message'>{error}</p>
			</label>
		</div>
	);
};

export default TextArea;
