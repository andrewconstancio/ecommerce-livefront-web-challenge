/* @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import AddToCartButton from "../AddToCartButton";

afterEach(() => {
	cleanup();
});

describe('Testing Add To Cart Button Component', () => {
	it('renders with default test', () => {
		render ( 
			<AddToCartButton />
		)
		
		expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
	});

	it('applies custom class when provied', () => {
		const customClass = 'customer-class';
		render (
			<AddToCartButton customClass={customClass} />
		)

		expect(screen.getByRole('button')).toHaveClass(customClass);
	});

	it('does not apply class when is not provied', () => {
		render (
			<AddToCartButton />
		)

		expect(screen.getByRole('button')).not.toHaveClass();
	});	
});