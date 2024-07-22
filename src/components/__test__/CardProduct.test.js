/* @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardProduct from '../CardProduct';

const mockProduct = {
  id: '1',
  title: 'Mock Product',
  category: 'Mock Category',
  image: 'Mock Image',
  price: 19.99,
};

describe('Testing Card Product Component', () => {
  it(('returns null when item prop is missing'),() => {
    const { container } = render(
      <MemoryRouter>
          <CardProduct product={null} />
      </MemoryRouter>
    );

    expect(container.firstChild).toBeNull();
});

  it(('returns null when item prod is invalid'), () => {
    const invalidProduct = {
      id: '1',
      image: '',
      title: '',
      category: '',
      price: null,
    };

    const { container } = render(
      <MemoryRouter>
          <CardProduct product={invalidProduct} />
      </MemoryRouter>
    )

    expect(container.firstChild).toBeNull();
  });

  it(('renders correctly with valid props'),() => {

    render(
      <MemoryRouter>
          <CardProduct product={mockProduct} />
      </MemoryRouter>
    );

    expect(screen.getByText('Mock Product')).toBeInTheDocument();
    expect(screen.getByText('Mock Category')).toBeInTheDocument();
    expect(screen.getByAltText('Mock Product image')).toBeInTheDocument();
    expect(screen.getByText('$ 19.99')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/product/1');
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
  });
});