import React from "react";
import HeroSection from "../components/HeroSection"
import { useState, useEffect } from "react"
import { getAllProducts } from "../api/data";
import ProductGrid from "../components/ProductGrid";
import ErrorPage from "./ErrorPage";

const Home = () => {

	// get products fetched by the API and store them into a state array
	const [products, setProducts] = useState([]);

	// state variable to indicate for loading state by the API
	const [isLoadingProducts, setIsLoadingProducts] = useState(true);

	// state variable for when an errors occures when fetching data from the API
	const [error, setError] = useState();

	// fetch all products whenever this conponent renders. products state, loading state, and error state are set here
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

		// call fetch all products async function
		fetchAllProducts();
	}, []);

	// if error state variable is not null we want to display the error page
	if(error) {
		return <ErrorPage />
	}

	// return the main html content for this component
	return (
		<>
			{/* hero section home page*/}
			<HeroSection />

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