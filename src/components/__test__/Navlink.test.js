/* @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavLink from '../Navbar/Navlink';
import Navdropdown from '../Navbar/Navdropdown';

afterEach(() => {
	cleanup();
});

// mock of nav dropdown component
jest.mock('../Navbar/Navdropdown');

const itemWithChildren = {
	title: 'Parent Item',
	path: '/parent',
	children: [
		{ title: 'Child Item 1', path: '/child1' },
		{ title: 'Child Item 2', path: '/child2' },
	],
};
  
const itemWithoutChildren = {
	title: 'Single Item',
	path: '/single',
};

describe('Testing Navlink component', () => {
	it('renders a link with the correct test', () => {
		render (
			<MemoryRouter>
				<NavLink item={itemWithoutChildren} depthLevel={0}/>
			</MemoryRouter>
		);

		expect(screen.getByText('Single Item')).toBeInTheDocument();
	});

	it('toggles dropdown on click', () => {

		Navdropdown.mockImplementation(({ _, dropdown, toggleDropdown }) => (
			<div>{dropdown ? 'Dropdown Open' : 'Dropdown Closed'}</div>
		));

		render (
			<MemoryRouter>
				<NavLink item={itemWithChildren} depthLevel={0}/>
			</MemoryRouter>
		);

		const button = screen.getByRole('button');

		expect(screen.getByText(/Dropdown Closed/i)).toBeInTheDocument();

		fireEvent.click(button);
    	expect(screen.getByText(/Dropdown Open/i)).toBeInTheDocument();

		fireEvent.click(button);
    	expect(screen.getByText(/Dropdown Closed/i)).toBeInTheDocument();
	});

	it('open menu on mouse enter and close on mouse leave', () => {

		Navdropdown.mockImplementation(({ _, dropdown, toggleDropdown }) => (
			<div>{dropdown ? 'Dropdown Open' : 'Dropdown Closed'}</div>
		));

		render (
			<MemoryRouter>
				<NavLink item={itemWithChildren} depthLevel={0}/>
			</MemoryRouter>
		);

		const listItem = screen.getByRole('listitem');

		// Initial state should be closed
		expect(screen.getByText(/Dropdown Closed/i)).toBeInTheDocument();
	
		// Mouse enter to open dropdown
		fireEvent.mouseEnter(listItem);
		expect(screen.getByText(/Dropdown Open/i)).toBeInTheDocument();
	
		// Mouse leave to close dropdown
		fireEvent.mouseLeave(listItem);
		expect(screen.getByText(/Dropdown Closed/i)).toBeInTheDocument();
	});
});