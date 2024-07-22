/* @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MobileMenuItems from '../Navbar/MobileMenuItems';

const mockItemWithChildren = {
	title: 'Parent Item',
	children: [
		{ title: 'Child Item 1', path: '/child1' },
		{ title: 'Child Item 2', path: '/child2' },
	]
};
  
const mockItemWithoutChildren = {
	title: 'Single Item',
	path: '/single'
};

describe('Testing MobileMenuItems component', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('shows hide menu items if nav item has children', () => {
		const mockToggleMenu = jest.fn();

		render (
			<MemoryRouter>
				<MobileMenuItems item={mockItemWithChildren} depthLevel={0} toggleMenu={mockToggleMenu} />
			</MemoryRouter>
		);

		const button = screen.getByTestId("mobile-dropdown-expand-button");
		expect(button).toBeInTheDocument();
		expect(screen.getByText('Parent Item')).toBeInTheDocument();
		expect(screen.getByText('Child Item 1')).toBeInTheDocument();
		expect(screen.getByText('Child Item 2')).toBeInTheDocument();
	});

	it('shows hide menu items with not children', () => {
		const mockToggleMenu = jest.fn();

		render (
			<MemoryRouter>
				<MobileMenuItems item={mockItemWithoutChildren} depthLevel={0} toggleMenu={mockToggleMenu} />
			</MemoryRouter>
		);
		expect(screen.getByText('Single Item')).toBeInTheDocument();
	});
});