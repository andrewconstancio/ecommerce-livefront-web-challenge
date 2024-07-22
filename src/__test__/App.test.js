
/* @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home';

jest.mock('../pages/Home');

describe('testing correct routes get rendered', () => {
  test('should mock the home component', () => {
    Home.mockImplementation(() => <div data-testid={"home-page"}></div>);

    render(
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>
    );
  
    const homePageElement = screen.getByTestId('home-page');
    expect(homePageElement).toBeInTheDocument()
  })
})


