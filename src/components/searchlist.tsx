import { Component, CSSProperties, ReactElement, useState } from 'react';
import { Product } from '../models/product';
import { PRODUCTS } from '../data/products';
import React from 'react';


const SearchBar: React.FC<{filterText: string, inStockOnly: boolean, onStockOnlyChange}> = ({filterText, inStockOnly, onStockOnlyChange}) => {

	const handleTextChange = () => {
		// setText()
	}

	const handleCheckboxClick = (e) => {
		onStockOnlyChange(e.target.checked);
	}

	return <div>
		<input type="text" onChange={handleTextChange} placeholder="Search..."/>
		<input type="checkbox" checked={inStockOnly} onChange={handleCheckboxClick}/>
	</div>;
}

const List: React.FC<{products: Product[], filterText: string, inStockOnly: boolean}> = ({products, filterText, inStockOnly}) => {
	let rows: any[] = [];
	const categories = [...new Set(products.map(p => p.category))] as string[];
	for (let category of categories) {
		rows.push(<ProductCategoryRow category={category} key={category} />);
		const categoryProducts: Product[] = products.filter(p => p.category === category && (!inStockOnly || (inStockOnly && p.stocked)));
		for (let product of categoryProducts) {
			rows.push(<ProductRow key={product.name} product={product} />);
		}
	}
	return <table className="table w-25 table-bordered table-hover m-auto mt-3 mb-5">
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
	return <tr>
		<td>{product.name}</td>
		<td>{product.price}</td>
	</tr>;
}


const ProductCategoryRow: React.FC<{category: string}> = (props) => {
	return <tr>
		<th colSpan={2}>{props.category}</th>
	</tr>
}

export class SearchList extends React.Component<{products: Product[]}, {filterText: string, inStockOnly: boolean}> {

	constructor(props) {
		super(props);
		this.state = {filterText: '', inStockOnly: false};
	}

	render() {
		const handleStockOnlyChange = (inStockOnly: boolean) => {
			this.setState({...this.state, inStockOnly: inStockOnly})
		}
		return <div>
			<SearchBar onStockOnlyChange={handleStockOnlyChange} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
			<List products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
		</div>;
	}
}
