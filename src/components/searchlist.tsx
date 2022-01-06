import { Component, CSSProperties, ReactElement } from 'react';
import { Product } from '../models/product';
import { PRODUCTS } from '../data/products';
import React from 'react';
const classNames = require('classnames');

const categoryClass: string = classNames({
	fontWeight: 'bold',
});

const listClass: string = classNames({
	backgroundColor: 'red',
	padding: '5px'
});

function SearchBar(): ReactElement {


	const handleTextChange = () => {

	}

	const handleCheckboxClick = () => {

	}
	return <div style={{backgroundColor: 'blue', height: '50px'}}>
		<input type="text" onChange={handleTextChange} placeholder="Search..."/>
		<input type="checkbox" onChange={handleCheckboxClick}/>
	</div>;
}

function List({products}) {
	let rows: any[] = [];
	const categories = [...new Set(products.map(p => p.category))] as string[];
	for (let category of categories) {
		console.log('CATTTT', category);
		rows.push(<ProductCategoryRow category={category} key={category} />);
		const categoryProducts: Product[] = products.filter(p => p.category === category);
		for (let product of categoryProducts) {
			console.log('PRODDDD', product)
			rows.push(<ProductRow key={product.name} product={product} />);
			// rows.push(<ProductRow  category={product.category} name={product.name} price={product.price} stocked={product.stocked} key={product.name}/>);
		}
	}
	return <table>
		<thead>
		<tr>
			<td>Name</td>
			<td>Price</td>
		</tr>
		</thead>
		<tbody>
		{rows}
		</tbody>
	</table>;
}

const ProductRow: React.FC<{product: Product}> = ({product}) => {
	return <tr className={listClass}>
		<td>{product.name}</td>
		<td>{product.price}</td>
	</tr>;
}


const ProductCategoryRow: React.FC<{category: string}> = (category) => {
	return <tr>
		<th colSpan={2}>{category}</th>
	</tr>
}

export class SearchList extends React.Component<{products: Product[]}, {}> {

	render() {
		const {products} = this.props;
		return <div style={{width: "200px", backgroundColor: 'darkgreen'}}>
			<SearchBar />
			<List products={products} />
		</div>;
	}
}
