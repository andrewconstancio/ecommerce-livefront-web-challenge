/* @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HeroSection from '../HeroSection';

afterEach(() => {
	cleanup();
});

describe('Testing Hero Section Component', () => {
	it('renders default text and elements', () => {
		render(
			<MemoryRouter>
				<HeroSection />
			</MemoryRouter>
		);

		expect(screen.getByText('BIGGEST SALE OF THE SEASON')).toBeInTheDocument();
		expect(screen.getByText('Shop now to save big')).toBeInTheDocument();
		expect(screen.getByText('Explore the best quality electronics, jewelry, men\'s and women\'s clothing')).toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'Shop Now' })).toBeInTheDocument();;
	});
});