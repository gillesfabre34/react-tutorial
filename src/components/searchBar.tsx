import React from 'react';

const SearchBar: React.FC<{filterText: string, inStockOnly: boolean, onStockOnlyChange: (checked: boolean) => unknown, onTextChange: (text: string) => unknown}> = (
	{filterText, inStockOnly, onStockOnlyChange, onTextChange}) => {

	const handleTextChange = (e) => {
		console.log(e.target.value)
		onTextChange(e.target.value)
	}

	const handleCheckboxClick = (e) => {
		onStockOnlyChange(e.target.checked);
	}

	return <div>
		<input type="text" onChange={handleTextChange} placeholder="Search..." value={filterText}/>
		<input type="checkbox" checked={inStockOnly} onChange={handleCheckboxClick}/>
	</div>;
}

export default SearchBar;
