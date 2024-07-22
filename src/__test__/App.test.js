
/* @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// route components
import Home from '../pages/Home';

// mock home page component
jest.mock('../pages/Home');

describe('testing correct routes get rendered', () => {
	test('should mock the home component', () => {
		// arrange
		Home.mockImplementation(() => <div data-testid={"home-page"}></div>);

		// act
		render(
			<MemoryRouter initialEntries={['/']}>
			  <Home />
			</MemoryRouter>
		);
	  
		// assert
		const homePageElement = screen.getByTestId('home-page');
		expect(homePageElement).toBeInTheDocument()
	})
})


