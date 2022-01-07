import { Component, CSSProperties, ReactElement, useState } from 'react';
import { Product } from '../models/product';
import { PRODUCTS } from '../data/products';
import React from 'react';


const SearchBar: React.FC<{filterText: string, inStockOnly: boolean, onStockOnlyChange: (checked: boolean) => unknown, onTextChange: (text: string) => unknown}> = (
	{filterText, inStockOnly, onStockOnlyChange, onTextChange}) => {

	const handleTextChange = (e) => {
		console.log(e.target.value)
		onTextChange(e.target.value)
	}

	const handleCheckboxClick = (e) => {
		onStockOnlyChange(e.target.checked);
	}

	return <div>
		<input type="text" onChange={handleTextChange} placeholder="Search..." value={filterText}/>
		<input type="checkbox" checked={inStockOnly} onChange={handleCheckboxClick}/>
	</div>;
}

const List: React.FC<{products: Product[], filterText: string, inStockOnly: boolean}> = ({products, filterText, inStockOnly}) => {
	let rows: any[] = [];
	const categories = [...new Set(products.map(p => p.category))] as string[];
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

	handleStockOnlyChange = (inStockOnly: boolean) => {
		this.setState({...this.state, inStockOnly: inStockOnly})
	}

	handleTextChange = (text: string) => {
		console.log('HDL', text)
		this.setState({...this.state, filterText: text})
	}

	render() {
		return <div>
			<SearchBar onStockOnlyChange={this.handleStockOnlyChange} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onTextChange={this.handleTextChange} />
			<List products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
		</div>;
	}
}
