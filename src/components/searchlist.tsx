import { Component, CSSProperties, ReactElement } from 'react';
import { Product } from '../models/product';
import { PRODUCTS } from '../data/products';
import React from 'react';


function SearchBar(): ReactElement {


	const handleTextChange = () => {

	}

	const handleCheckboxClick = () => {

	}
	return <div>
		<input type="text" onChange={handleTextChange} placeholder="Search..."/>
		<input type="checkbox" onChange={handleCheckboxClick}/>
	</div>;
}

function List({products}) {
	let rows: any[] = [];
	const categories = [...new Set(products.map(p => p.category))] as string[];
	for (let category of categories) {
		rows.push(<ProductCategoryRow category={category} key={category} />);
		const categoryProducts: Product[] = products.filter(p => p.category === category);
		for (let product of categoryProducts) {
			rows.push(<ProductRow key={product.name} product={product} />);
		}
	}
	return <table className="table w-25 table-bordered m-auto mt-3 mb-5">
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

export class SearchList extends React.Component<{products: Product[]}, {}> {

	render() {
		const {products} = this.props;
		return <div>
			<SearchBar />
			<List products={products} />
		</div>;
	}
}
