import React, { useState } from 'react';

function useIncrement(initialCount, step) {
	const [count, setCount] = useState(initialCount);

	function increment() {
		setCount(c => c + step);
	}
	return [count, increment];
}

function useToggle(visible) {
	const [visibility, setVisibility] = useState(visible);
	const toggle = () => {
		setVisibility(visibility => !visibility);
	}
	return [visibility, toggle];
}

export function Counter() {

	const [count, increment] = useIncrement(0, 3);
	const [isChecked, toggle] = useToggle(false);
	return <div>
		<input type="checkbox" onChange={toggle} checked={isChecked} />
		{ !isChecked && <button onClick={increment}>Increment {count}</button> }
	</div>
}
