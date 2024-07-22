/* @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navdropdown from '../Navbar/Navdropdown';


const itemWithGroupTitle = {
	groupTitle: 'Group Title',
	children: [
		{ id: 1, title: 'Child Item 1', path: '/child1' },
		{ id: 2, title: 'Child Item 2', path: '/child2' },
	],
};
  
const itemWithoutGroupTitle = {
	children: [
		{ id: 1, title: 'Child Item 1', path: '/child1' },
		{ id: 2, title: 'Child Item 2', path: '/child2' },
	],
};

describe('Test Navdropdown Component', () => {
	it('renders the group title if exist', () => {
		render (
			<MemoryRouter>
				<Navdropdown item={itemWithGroupTitle} dropdown={true} toggleDropdown={() => {}} />
			</MemoryRouter>
		);

		expect(screen.getByText('Group Title')).toBeInTheDocument();
	});
});