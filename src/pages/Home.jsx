import AppBanner from "../components/HeroSection"
import { useState, useEffect } from "react"
import { getAllProducts } from "../data";
import React from 'react';
import ProductGrid from "../components/ProductGrid";
import ErrorPage from "../ErrorPage";

const Home = () => {

	// all products fetched up API
	const [products, setProducts] = useState([]);

	// API loading state
	const [isLoadingProducts, setIsLoadingProducts] = useState(true);

	// API error
	const [error, setError] = useState();

	// fetch product details on component render
	useEffect(() => {
		async function fetchAllProducts() {
			try {
				const products = await getAllProducts();
				setProducts(products);
			} catch(err) {
				setError(err);
			} finally {
				setIsLoadingProducts(false);
			}
		}
		fetchAllProducts();
	}, []);

	// if an error display the error page
	if(error) {
		return <ErrorPage />
	}

	// component main content
	return (
		<>
			{/* hero section hom page */}
			<AppBanner />

			{/* all product section */}
			<ProductGrid 
				sectionTitle={"All Products"} 
				products={products}
				isLoading={isLoadingProducts} 
			/>
		</>
	)
}

// export default component
export default Home;