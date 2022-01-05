import React, { useState } from 'react';

function useIncrement(initialCount) {
	const [count, setCount] = useState(initialCount);

	function increment() {
		setCount(c => c + 1);
	}
	return [count, increment];
}

export function Counter() {

	const [count, increment] = useIncrement(0);

	return <button onClick={increment}>Increment {count}</button>
}
