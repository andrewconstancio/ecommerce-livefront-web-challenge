/* @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavDropDown from '../components/Navbar/NavDropdown';


const navItemWithGroupTitle = {
	groupTitle: 'Group Title',
	children: [
		{ id: 1, title: 'Child Item 1', path: '/child1' },
		{ id: 2, title: 'Child Item 2', path: '/child2' },
	],
};
  
const navItemWithoutGroupTitle = {
	children: [
		{ id: 1, title: 'Child Item 1', path: '/child1' },
		{ id: 2, title: 'Child Item 2', path: '/child2' },
	],
};

describe('Test NavDropDown Component', () => {
	it('renders the group title if exist', () => {
		render (
			<MemoryRouter>
				<NavDropDown item={navItemWithGroupTitle} dropdown={true} toggleDropdown={() => {}} />
			</MemoryRouter>
		);

		expect(screen.getByText('Group Title')).toBeInTheDocument();
	});

	it('renders the navigation items with title', () => {
		render (
			<MemoryRouter>
				<NavDropDown item={navItemWithGroupTitle} dropdown={true} toggleDropdown={() => {}} />
			</MemoryRouter>
		);

		expect(screen.getByText('Child Item 1')).toBeInTheDocument();
		expect(screen.getByText('Child Item 2')).toBeInTheDocument();
	});

	it('renders the navigation items no title', () => {
		render (
			<MemoryRouter>
				<NavDropDown item={navItemWithoutGroupTitle} dropdown={true} toggleDropdown={() => {}} />
			</MemoryRouter>
		);

		expect(screen.getByText('Child Item 1')).toBeInTheDocument();
		expect(screen.getByText('Child Item 2')).toBeInTheDocument();
	});
});