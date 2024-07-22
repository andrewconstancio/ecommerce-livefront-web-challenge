/* @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MobileNavBar from '../components/Navbar/MobileNavBar';
import { navItems } from '../static/Navitems';

describe('Testing MobileNavBar Component', () => {
  it('renders the MobileNavBar component', () => {
    render(
      <MemoryRouter>
        <MobileNavBar />
      </MemoryRouter>
    );

    expect(screen.getByRole('button', { name: /collapsed navigation submenu/i })).toBeInTheDocument();
    expect(screen.getByText('Fake Store')).toBeInTheDocument();
  });

  it('shows menu items when menu is clicked', () => {
    render (
      <MemoryRouter>
        <MobileNavBar />
      </MemoryRouter>
    );

    const toggleButton = screen.getByRole('button', { name: /collapsed navigation submenu/i });

    fireEvent.click(toggleButton);

    navItems.forEach(item => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});