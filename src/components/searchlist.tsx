import { Component, CSSProperties, ReactElement } from 'react';
import { Product } from '../models/product';
import { PRODUCTS } from '../data/products';
import React from 'react';
const classNames = require('classnames');

const categoryClass: string = classNames({
	fontWeight: 'bold',
});

const searchListClass: string = classNames({
	backgroundColor: 'red',
	padding: '5px'
});

const listClass: string = classNames({
	backgroundColor: 'red',
	padding: '5px'
});

function SearchBar(): ReactElement {
	return <div style={{backgroundColor: 'blue', height: '50px'}}>

	</div>;
}

function List(props: {products: Product[]}) {
	let children: ReactElement[] = [];
	const categories: string[] = [...new Set(props.products.map(p => p.category))];
	for (let category of categories) {
		children.push(ListElement({text: category, className: categoryClass, key: category}));
		const categoryProducts: Product[] = props.products.filter(p => p.category === category);
		for (let product of categoryProducts) {
			children.push(ListElement({text: product.name, className: "", key: product.name}));
		}
	}
	return <div className={listClass}>{children}</div>;
}

function ListElement(props: { text: string, className: string, key: string }) {
	return <div className={props.className} key={props.key}>{props.text}</div>;
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
