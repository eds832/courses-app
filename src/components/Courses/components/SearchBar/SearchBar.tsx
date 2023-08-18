import React, { useState } from 'react';

import './SearchBar.css';
import Button from './../../../../common/Button/Button';
import Input from './../../../../common/Input/Input';
import SearchBarProps from './SearchBarProps';
import { SEARCH_BUTTON_TEXT } from './../../../../constants';

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
	const [searchQuery, setSearchQuery] = useState<string>('');

	const handleInputChange = (value: string) => {
		setSearchQuery(value);
		if (!value) {
			onSearch('');
		}
	};

	const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			onSearch(searchQuery);
		}
	};

	const handleSearchClick = () => {
		onSearch(searchQuery);
	};

	return (
		<div className='search-bar'>
			<Input
				value={searchQuery}
				onChange={handleInputChange}
				onKeyDown={handleInputKeyDown}
			/>
			<Button onClick={handleSearchClick} buttonText={SEARCH_BUTTON_TEXT} />
		</div>
	);
};

export default SearchBar;
