/* @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { getProductById } from '../api/data';
import ProductDetails from '../pages/ProductDetails';

// mock getProductById API call
jest.mock('../api/data', () => ({
	getProductById: jest.fn(),
}));

// mock error page component
jest.mock('../pages/ErrorPage', () => () => <div>Error Page</div>);

// mock AddToCartButton component
jest.mock('../components/AddToCartButton', () => () => <button>Add to Cart</button>);

// mocking bad product ID
const mockBadProductId = 'abc';

// mock product object
const mockProduct = {
	id: '1',
	image: 'mock-image.jpg',
	category: 'mock category',
	title: 'mock title',
	description: 'mock description',
	price: 19.99,
};

describe('Testing ProductDetails component', () => {
	
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('renders product details', async () => {
		getProductById.mockResolvedValue(mockProduct);
	
		render (
			<MemoryRouter initialEntries={[`/product/${mockProduct.id}`]}>
				<Routes>
					<Route path="/product/:id" element={<ProductDetails />} />
				</Routes>
			</MemoryRouter>
		);
	
		await waitFor(() => expect(getProductById).toHaveBeenCalledWith(mockProduct.id));

		expect(screen.getByText(mockProduct.category)).toBeInTheDocument();
		expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
		expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
		expect(screen.getByText(`$ ${mockProduct.price.toFixed(2)}`)).toBeInTheDocument();
		expect(screen.getByRole('img')).toHaveAttribute('src', mockProduct.image);
	});

	it('renders error page on API error', async () => {

		// mock throw an API error
		getProductById.mockRejectedValue(new Error('API Error'));
	
		// render the component for testing
		render (
			<MemoryRouter initialEntries={[`/product/${mockBadProductId}`]}>
				<Routes>
					<Route path="/product/:id" element={<ProductDetails />} />
				</Routes>
			</MemoryRouter>
		);
	
		// test for expecting api call to called with invalid product id
		await waitFor(() => expect(getProductById).toHaveBeenCalledWith(mockBadProductId));
		
		// expecting test for error text to be display on screen
		expect(screen.getByText('Error Page')).toBeInTheDocument();
	});

	it('updates add to cart counter correctly', async () => {

		getProductById.mockResolvedValue(mockProduct);

		render(
			<MemoryRouter initialEntries={[`/product/${mockProduct.id}`]}>
				<Routes>
					<Route path="/product/:id" element={<ProductDetails />} />
				</Routes>
			</MemoryRouter>
		);
	
		await waitFor(() => expect(getProductById).toHaveBeenCalledWith(mockProduct.id));
	
		const addButton = screen.getAllByRole('button')[1]; 
		const subtractButton = screen.getAllByRole('button')[0];
		const countDisplay = screen.getByText('0');
	
		fireEvent.click(addButton);
		expect(countDisplay).toHaveTextContent('1');
	
		fireEvent.click(subtractButton);
		expect(countDisplay).toHaveTextContent('0');
	});
});