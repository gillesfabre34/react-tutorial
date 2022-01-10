import React, { useEffect, useState } from 'react';
import { store } from '../store/store';
import { ADD_PRODUCTS, addProducts } from '../store/actions';
import { connect } from 'react-redux';

function useIncrement(initialCount) {
	const [count, setCount] = useState(initialCount);

	function increment(step: number) {
		setCount(c => c + step);
		store.dispatch({type: ADD_PRODUCTS, payload: step});
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

export const Counter: React.FC<{addProducts: (newProducts: number) => any}> = ({addProducts}) => {

	const [newProducts, increment] = useIncrement(0);
	const [isChecked, toggle] = useToggle(false);

	console.log("PROPSSSS", addProducts)

	useEffect(() => {
		document.title = 'Total articles : ' + store.getState().nbProducts;
	});

	return <div>
		{/*<input type="checkbox" onChange={toggle} checked={isChecked} />*/}
		{ !isChecked && <button onClick={() => increment(2)}>Add</button> }
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
		addProducts: (nbProducts: number) => dispatch(addProducts(nbProducts))
	};
};

export const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

