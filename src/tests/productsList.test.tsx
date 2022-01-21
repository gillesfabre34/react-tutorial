import { render, screen } from '@testing-library/react';
import React from 'react';
import { ProductsList } from '../components/productsList';
import { Provider } from 'react-redux';
import { store } from '../store/store';

test('ProductsList', () => {
	render(<Provider store={store}>
		<ProductsList filterText='' inStockOnly={true} />
	</Provider>);
	expect(screen.queryByText('Nameeee')).toBeNull();
	expect(screen.queryByText('Name')).toBeInTheDocument();
});
