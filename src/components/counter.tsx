import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { productSlice, selectNbArticles } from '../store/slices/productSlice';

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

export const ConnectedCounter: React.FC<any> = ({addProduct, removeProduct}) => {
// export const ConnectedCounter: React.FC<{addProduct: () => any}> = ({addProduct}) => {
// export const ConnectedCounter: React.FC<{addProduct: () => any, removeProduct: () => any}> = ({addProduct, removeProduct}) => {

	const [newProducts, increment] = useIncrement(0);
	const [isChecked, toggle] = useToggle(false);
	const nbProducts = useSelector(selectNbArticles);

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
		}
		removeProduct();
	}

	return <div>
		{/*<input type="checkbox" onChange={toggle} checked={isChecked} />*/}
		{ !isChecked && <button onClick={() => add()}>+</button> }
		{ !isChecked && <button onClick={() => remove()}>-</button> }
		<span style={{marginLeft: "10px"}} > {newProducts}</span>
	</div>
}


const mapStateToProps = state => {
	return {
		nbArticles: state.nbArticles || 0
	};
};

const mapDispatchToProps = {
	addProduct: productSlice.actions.add,
	removeProduct: productSlice.actions.remove
};

export const Counter = connect(mapStateToProps, mapDispatchToProps)(ConnectedCounter);

