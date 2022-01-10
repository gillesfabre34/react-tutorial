import React, { memo, NamedExoticComponent, ReactElement, useCallback, useEffect, useReducer } from 'react';
import { Product } from '../models/product';
import { Counter } from './counter';
import { store } from '../store/store';
import { connect } from 'react-redux';


const ProductsList: React.FC<{products: Product[], filterText: string, inStockOnly: boolean, nbProducts?: number}> =
	({products, filterText, inStockOnly, nbProducts}) => {
// const ProductsList: React.FC<{products: Product[], filterText: string, inStockOnly: boolean, addArticles?: (nbArticles) => any}> =
// 	({products, filterText, inStockOnly, addArticles}) => {

	let rows: ReactElement[] = [];
	const categories: string[] = [...new Set(products.map(p => p.category))];
	for (let category of categories) {
		rows.push(<ProductCategoryRow category={category} key={category} />);
		const categoryProducts: Product[] = products.filter(
			p => p.category === category
				&& (!inStockOnly || (inStockOnly && p.stocked))
				&& (!filterText || (filterText && p.name.includes(filterText)))
		);
		for (let product of categoryProducts) {
			rows.push(<ProductRow key={product.name} product={product} />);
		}
	}
	return <table className="table w-50 table-bordered table-hover m-auto mt-3 mb-5">
		<thead>
		<tr>
			<td>Name</td>
			<td>Price</td>
			<td>Articles</td>
		</tr>
		</thead>
		<tbody>
		{rows}
		<tr>
			<td>TOTAL</td>
			<td></td>
			<td>{nbProducts}</td>
		</tr>
		</tbody>
	</table>;
}

const ProductRowComponent: React.FC<{product: Product}> = ({product}) => {
	return <tr>
		<td>{product.name}</td>
		<td>{product.price}</td>
		<td><Counter /></td>
	</tr>;
}

const ProductRow: NamedExoticComponent<{product: Product}> = memo(ProductRowComponent);

const ProductCategoryRow: React.FC<{category: string}> = (props) => {
	return <tr>
		<th colSpan={2}>{props.category}</th>
	</tr>
}

const addProducts = (newProducts = 1) => {
	return (dispatch, getState) => {
		console.log("addprodu", getState())
		store.dispatch({type: 'counter/increment', payload: getState().nbProducts + newProducts});
	}
}


const mapDispatchToProps = state => {
	return {
		nbProducts: state.nbProducts || 0
	};
};

export default connect(mapDispatchToProps)(ProductsList);
// const mapDispatchToProps = dispatch => {
// 	return {
// 		addProduct: (newProducts: number) => dispatch(addProducts(newProducts))
// 	};
// };
//
// export default ProductsList;
