import { render, screen } from '@testing-library/react';
import React from 'react';
import { ProductsList } from '../components/productsList';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { wrap } from './utils';

test('ProductsList', () => {
	render(<Provider store={store}>
		<ProductsList filterText='' inStockOnly={true} />
	</Provider>);
	expect(screen.queryByText('Nameeee')).toBeNull();
	expect(screen.queryByText('Name')).toBeInTheDocument();
});

test('ProductsList', () => {
	wrap(<ProductsList filterText='' inStockOnly={true} />);
	expect(screen.getByTestId('ProductsListTable')).toBeInTheDocument();
});
