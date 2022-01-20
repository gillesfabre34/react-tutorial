import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { addProduct, removeProduct, selectNbProducts } from '../store/slices/productSlice';

export interface CounterProps {
	addProduct: any;
	removeProduct: any;
}

function useIncrement(initialCount) {
	const [count, setCount] = useState(initialCount);

	function increment(step: number) {
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

export const ConnectedCounter: React.FC<CounterProps> = ({addProduct, removeProduct}) => {

	const [newProducts, increment] = useIncrement(0);
	const [isChecked, toggle] = useToggle(false);
	const nbProducts: number = useSelector(selectNbProducts);

	useEffect(() => {
		document.title = 'Total articles : ' + nbProducts;
	});

	const add = () => {
		increment(1);
		addProduct();
	}

	const remove = () => {
		if (newProducts > 0) {
			increment(-1);
			removeProduct();
		}
	}

	return <div>
		{/*<input type="checkbox" onChange={toggle} checked={isChecked} />*/}
		{ !isChecked && <button onClick={() => add()}>+</button> }
		{ !isChecked && <button onClick={() => remove()}>-</button> }
		<span style={{marginLeft: "10px"}} > {newProducts}</span>
	</div>
}


const mapDispatchToProps = {
	addProduct,
	removeProduct
};

export const Counter = connect(null, mapDispatchToProps)(ConnectedCounter);

