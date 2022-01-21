import { render, screen, within } from '@testing-library/react';
import React from 'react';
import { ProductsList } from '../components/productsList';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { wrap } from './utils';

describe('ProductsList tests', () => {
	test('ProductsList queryByText', () => {
		render(<Provider store={store}>
			<ProductsList filterText='' inStockOnly={true} />
		</Provider>);
		expect(screen.queryByText('Nameeee')).toBeNull();
		expect(screen.queryByText('Name')).toBeInTheDocument();
	});

	test('ProductsList getByTestId', () => {
		wrap(<ProductsList filterText='' inStockOnly={true} />);
		expect(screen.getByTestId('ProductsListTable')).toBeInTheDocument();
	});

	test('ProductsList get 2 sports with stocks', () => {
		wrap(<ProductsList filterText='' inStockOnly={true} />);
		const sports = screen.queryAllByText(/ball/);
		expect(sports?.length).toEqual(2);
		const football = within(screen.getByTestId('ProductsListTable')).queryByText('Football');
		expect(football).toBeInTheDocument();
	});
});
