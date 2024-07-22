/* @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import Header from '../Navbar/Header';
import Navbar from '../Navbar/Navbar';
import MobileNavbar from '../Navbar/MobileNavBar';

jest.mock('../Navbar/Navbar');
jest.mock('../Navbar/MobileNavbar');

describe('Testing the Header Component', () => {
  it('renders the desktop nav and mobile nav components', () => {
    Navbar.mockImplementation(() => <div data-testid="navbar" />);
    MobileNavbar.mockImplementation(() => <div data-testid="mobilenavbar" />);
    
    render (
      <Header />
    );

    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('mobilenavbar')).toBeInTheDocument();
  });
});