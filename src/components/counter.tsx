import React, { useEffect, useState } from 'react';
import { store } from '../store/store';
import { addProduct, removeProduct } from '../store/actions';
import { connect } from 'react-redux';

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

export const ConnectedCounter: React.FC<{addProduct: () => any, removeProduct: () => any}> = ({addProduct, removeProduct}) => {

	const [newProducts, increment] = useIncrement(0);
	const [isChecked, toggle] = useToggle(false);

	useEffect(() => {
		document.title = 'Total articles : ' + store.getState().nbProducts;
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
		nbProducts: state.nbProducts || 0
	};
};

export const mapDispatchToProps = dispatch => {
	return {
		addProduct: () => dispatch(addProduct()),
		removeProduct: () => dispatch(removeProduct())
	};
};

export const Counter = connect(mapStateToProps, mapDispatchToProps)(ConnectedCounter);

