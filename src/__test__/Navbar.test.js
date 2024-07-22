/* @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { navItems } from '../static/Navitems';

describe('Testing Navbar component', () => {	
	it('renders the store text', () => {
		render (
			<MemoryRouter>
				<Navbar />
			</MemoryRouter>
		);

		expect(screen.getByText('Fake Store')).toBeInTheDocument();
	});

	it('renders the navigation items text', () => {
		render (
			<MemoryRouter>
				<Navbar />
			</MemoryRouter>
		);

		navItems.forEach(item => {
			expect(screen.getByText(item.title)).toBeInTheDocument();
		});
	});
});
