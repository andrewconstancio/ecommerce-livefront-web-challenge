/* @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup, waitFor} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { getAllProducts } from '../api/data';
import Home from '../pages/Home';

// mock getAllProducts API call
jest.mock('../api/data', () => ({
	getAllProducts: jest.fn(),
}));

// mock error page component
jest.mock('../pages/ErrorPage', () => () => <div>Error Page</div>);


describe('Testing Home component', () => {
	
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('call gets products on load', async () => {
		render (
			<MemoryRouter>
					<Home />
			</MemoryRouter>
		);
	
		await waitFor(() => expect(getAllProducts).toHaveBeenCalled());
	});

	it('show error page on API error', async () => {
		// mock throw an API error
		getAllProducts.mockRejectedValue(new Error('API Error'));
	
		render (
			<MemoryRouter>
					<Home />
			</MemoryRouter>
		);
		await waitFor(() => expect(getAllProducts).toHaveBeenCalled());
		
		// expecting test for error text to be display on screen
		expect(screen.getByText('Error Page')).toBeInTheDocument();
	});
});