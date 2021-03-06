import React, { memo, NamedExoticComponent, ReactElement } from 'react';
import { Product } from '../models/product';
import { connect, useSelector } from 'react-redux';
import { Counter } from './counter';
import { selectProducts } from '../store/slices/productsSlice';
import { selectNbProducts } from '../store/slices/productSlice';

export interface ProductsListProps  {
	filterText: string,
	inStockOnly: boolean,
}

export const ProductsList: React.FC<ProductsListProps> =
	({filterText, inStockOnly}) => {


		let rows: ReactElement[] = [];
		const products = useSelector(selectProducts);
		const nbArticles = useSelector(selectNbProducts);
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
		return <table className="table w-50 table-bordered table-hover m-auto mt-3 mb-5" data-testid="ProductsListTable">
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
				<td>{nbArticles}</td>
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
		<th />
	</tr>
}
