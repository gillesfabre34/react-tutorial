import React from 'react';
import { Product } from '../models/product';
import SearchBar from './searchBar';
import { ProductsList } from './productsList';

export class SearchComponent extends React.Component<{products: Product[]}, {filterText: string, inStockOnly: boolean}> {

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
			<ProductsList products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
		</div>;
	}
}
