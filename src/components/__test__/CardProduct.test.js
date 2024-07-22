/* @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardProduct from '../CardProduct';

afterEach(() => {
	cleanup();
});

const product = {
	id: '1',
	title: 'Mock Product',
	category: 'Mock Category',
	image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
	price: 19.99,
};

describe('Testing Card Product Component', () => {
	it(('returns null when item prop is missing'),() => {
		const { container } = render(
			<MemoryRouter>
				<CardProduct product={null} />
			</MemoryRouter>
		);

		expect(container.firstChild).toBeNull();
	});

	it(('returns null when item prod is invalid'), () => {
		const invalidProduct = {
			id: '1',
			image: '',
			title: '',
			category: '',
			price: null,
		};

		const { container } = render(
			<MemoryRouter>
				<CardProduct product={invalidProduct} />
			</MemoryRouter>
		)

		expect(container.firstChild).toBeNull();
	});

	it(('renders correctly with valid props'),() => {

		render(
			<MemoryRouter>
				<CardProduct product={product} />
			</MemoryRouter>
		);

		// test product title
		expect(screen.getByText('Mock Product')).toBeInTheDocument();

		//test product category
		expect(screen.getByText('Mock Category')).toBeInTheDocument();

		//test product image alt text
		expect(screen.getByAltText('Mock Product image')).toBeInTheDocument();

		//test product price text
		expect(screen.getByText('$ 19.99')).toBeInTheDocument();

		//test link to product
		expect(screen.getByRole('link')).toHaveAttribute('href', '/product/1');

		//test add to cart button is visible
		expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
	});
});