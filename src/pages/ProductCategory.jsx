import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getProductsByCategoryName } from "../api/data";
import ProductGrid from "../components/ProductGrid";

const ProductCategory = () => {

	// product category name url param
	const { name } = useParams();

	// products fetch from API
	const [products, setProducts] = useState([]);

	// API loading state
	const [isLoadingProducts, setIsLoadingProducts] = useState(true);

	// API error
	const [error, setError] = useState(null);

	// fetch products by category
	useEffect(() => {
		async function fetchProducts() {
		try {
				const products = await getProductsByCategoryName(name);
				setProducts(products);
			} catch(err) {
				setError(err);
			} finally {
				setIsLoadingProducts(false);
			}
		}
		fetchProducts();
	}, [name]);

	// if an error display the error page
	if(error) {
		return <ErrorPage />
	}
		
	// component main content
	return (
		<ProductGrid 
			sectionTitle={name} 
			products={products}
			isLoading={isLoadingProducts} 
		/>
	);
}

export default ProductCategory