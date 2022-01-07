import React, { useEffect, useReducer, useState } from 'react';
import { counterReducer } from '../store/counterSlice';

function useIncrement(initialCount, step) {
	const [count, setCount] = useState(initialCount);
	const [nbArticles, dispatch] = useReducer(counterReducer, 0);

	function increment() {
		setCount(c => c + step);
		dispatch({type: 'counter/increment', payload: step});
		console.log('nbbbb', nbArticles)
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

	useEffect(() => {
		document.title = 'Total articles : ' + count;
	});

	return <div>
		{/*<input type="checkbox" onChange={toggle} checked={isChecked} />*/}
		{ !isChecked && <button onClick={increment}>+</button> }
		<span style={{marginLeft: "10px"}} > {count}</span>
	</div>
}
