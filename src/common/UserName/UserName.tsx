import React from 'react';

import './UserName.css';
import { UserNameProps } from './UserNameProps';

const UserName: React.FC<UserNameProps> = (props) => {
	return (
		<div className='user-name'>
			<p>{props.name}</p>
		</div>
	);
};

export default UserName;
