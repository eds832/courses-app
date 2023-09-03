import React from 'react';

import { AuthorItemProps } from './AuthorItemProps';

const AuthorItem: React.FC<AuthorItemProps> = (props) => {
	const handleAddAuthor = () => {
		props.onAddAuthorClicked(props.id);
	};
	const handleDeleteAuthor = () => {
		if (typeof props.onDeleteAuthorClicked === 'function') {
			props.onDeleteAuthorClicked(props.id);
		}
	};
	return (
		<tr>
			<td>{props.name}</td>
			{props.withAdd && (
				<td className='plus' onClick={handleAddAuthor}>
					+
				</td>
			)}
			<td className='delete' onClick={handleDeleteAuthor}>
				🗑
			</td>
		</tr>
	);
};

export default AuthorItem;
