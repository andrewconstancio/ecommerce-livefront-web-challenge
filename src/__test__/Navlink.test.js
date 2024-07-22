/* @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavLink from '../components/Navbar/Navlink';

// mock of nav dropdown component
jest.mock('../components/Navbar/Navdropdown', () => ({ _, dropdown, toggleDropdown }) => (
  <div>{dropdown ? 'Dropdown Open' : 'Dropdown Closed'}</div>
));

const navItemWithChildren = {
	title: 'Parent Item',
	path: '/parent',
	children: [
		{ title: 'Child Item 1', path: '/child1' },
		{ title: 'Child Item 2', path: '/child2' },
	],
};
  
const navItemWithoutChildren = {
	title: 'Single Item',
	path: '/single',
};

describe('Testing Navlink component', () => {
	it('renders a link with the correct test', () => {
		render (
			<MemoryRouter>
				<NavLink item={navItemWithoutChildren} depthLevel={0}/>
			</MemoryRouter>
		);

		expect(screen.getByText('Single Item')).toBeInTheDocument();
	});

	it('toggles dropdown on click', () => {

		render (
			<MemoryRouter>
				<NavLink item={navItemWithChildren} depthLevel={0}/>
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

		render (
			<MemoryRouter>
				<NavLink item={navItemWithChildren} depthLevel={0}/>
			</MemoryRouter>
		);

		const listItem = screen.getByRole('listitem');

		expect(screen.getByText(/Dropdown Closed/i)).toBeInTheDocument();
	
		fireEvent.mouseEnter(listItem);
		expect(screen.getByText(/Dropdown Open/i)).toBeInTheDocument();
	
		fireEvent.mouseLeave(listItem);
		expect(screen.getByText(/Dropdown Closed/i)).toBeInTheDocument();
	});
});