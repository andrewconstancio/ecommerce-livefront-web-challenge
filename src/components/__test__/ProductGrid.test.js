/* @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup} from '@testing-library/react';
import ProductGrid from '../ProductGrid';
import { MemoryRouter } from 'react-router-dom';

// mock error page component
jest.mock('../../pages/ErrorPage', () => () => <div>Error Page</div>);

// mock section title
const mockSectionTitle = 'test';

// mock product object
const mockProducts = [
	{
		id: '1',
		image: 'mock-image.jpg',
		category: 'mock category',
		title: 'mock title',
		description: 'mock description',
		price: 19.99,
	},
	{
		id: '2',
		image: 'mock-image-2.jpg',
		category: 'mock category 2',
		title: 'mock title 2',
		description: 'mock description 2',
		price: 29.99,
	}
];

describe('Testing ProductGrid component', () => {
	
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('renders loading section when is loading prop is true', () => {
		render (
			<ProductGrid isLoading={true} />
		);

		expect(screen.getByTestId('product-grid-loader-section-grid')).toBeInTheDocument();
	});

	it('renders nothing when producst are null', () => {
		const { container } = render (
			<ProductGrid products={null} />
		);

		expect(container.firstChild).toBeNull();
	});

	it('renders section title if present', () => {

		render (
			<MemoryRouter>
				<ProductGrid sectionTitle={mockSectionTitle} products={mockProducts} isLoading={false}  />
			</MemoryRouter>
		);
	
		expect(screen.getByText(mockSectionTitle)).toBeInTheDocument();
	});

	it('renders product when is not loading and products are present', () => {

		render (
			<MemoryRouter>
				<ProductGrid products={mockProducts} />
			</MemoryRouter>
		);
	
		mockProducts.forEach((product) => {
			expect(screen.getByText(product.title)).toBeInTheDocument();
			expect(screen.getByText(product.category)).toBeInTheDocument();
			expect(screen.getByText(`$ ${product.price.toFixed(2)}`)).toBeInTheDocument();
		});	
	});
});