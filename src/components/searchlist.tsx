import React, { memo, NamedExoticComponent, ReactElement } from 'react';
import { Product } from '../models/product';
import { Counter } from './counter';


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
			rows.push(<ProductRowComponent key={product.name} product={product} />);
			// rows.push(<ProductRow key={product.name} product={product} />);
		}
	}
	return <table className="table w-50 table-bordered table-hover m-auto mt-3 mb-5">
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

export class SearchList extends React.Component<{products: Product[]}, {filterText: string, inStockOnly: boolean}> {

	constructor(props) {
		super(props);
		this.state = {filterText: '', inStockOnly: false};
	}

	handleStockOnlyChange = (inStockOnly: boolean) => {
		this.setState({inStockOnly: inStockOnly})
	}

	handleTextChange = (text: string) => {
		this.setState({filterText: text})
	}

	render() {
		return <div>
			<SearchBar onStockOnlyChange={this.handleStockOnlyChange} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onTextChange={this.handleTextChange} />
			<List products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
		</div>;
	}
}
