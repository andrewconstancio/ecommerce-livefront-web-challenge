import React from "react";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getProductById } from "../api/data";
import AddToCartSection from '../components/AddToCartSection';
import ErrorPage from "../pages/ErrorPage";
import Skeleton from 'react-loading-skeleton';

const ProductDetails = () => {

	// product id url param
	const { id } = useParams();

	// get product fetched by id form the API and store it into a state variable
	const [product, setProduct] = useState(null);

	// state variable for when an errors occures when fetching data from the API
	const [error, setError] = useState(null);

	// product added to cart counter state variable
	const [productAddedCount, setProductAddedCount] = useState(0);

  // fetch get product by id whenever this conponent renders. products state, loading state, and error state are set here
	useEffect(() => {
		async function fetchProduct() {
			try {
				const product = await getProductById(id);
				if (product && product.image && product.title && product.category && product.price) {
					setProduct(product);
				} else {
					throw new Error('Invalid product information.');
				}
			} catch(err) {
				setError(err);
			}
		  }
		  fetchProduct();
	}, [id]);

  // subtract the product added to cart count state variable
	const subtractProductCartCount = () => {
		if(productAddedCount > 0) {
			setProductAddedCount(prevValue => prevValue - 1);
		}
	};

  // add the product added to cart count state variable
	const addProductCartCount = () => {
		setProductAddedCount(prevValue => prevValue + 1);
	};

  // if error state variable is not null we want to display the error page
	if(error) {
		return <ErrorPage />
	}

  // return the main html content for this component
	return (
		<section className="content-section-product-details" >
			<div className="product-details-section">
				<div className="product-details-images">
          {/* product main image */}
					{product && product.image ? (
						<img 
							className="product-details-main-image" 
							loading="lazy" 
							src={product.image} 
							alt={`${product.title} image`}
						/>
					) : (
						<Skeleton className="product-details-main-image" />
					)}
				</div>

				<div className="product-details-information">
          {/* product category */}
					{product && product.category ? (
						<span 
							className="product-details-category" 
							aria-label={`Product category ${product.category}`}
						>
							{product.category}
						</span>
					) : (
						<Skeleton className="product-details-category"  />
					)}

          {/* product title */}
					{product && product.title ? (
						<span 
							className="product-details-title"
							aria-label={`Product title ${product.title}`}>
							{product.title}
						</span>
					) : (
						<Skeleton className="product-details-title" />
					)}

          {/* product description */}
					{product && product.description ? (
						<span 
							className="product-details-description"
							aria-label={`Product description ${product.description}`}>
							{product.description}
						</span>
					) : (
						<Skeleton className="product-details-description" />
					)}

          {/* product price to the hundres decimal place */}
					{product && product.price ? (
						<span 
							className="product-details-price"
							aria-label={`Product description ${product.price.toFixed(2)}`}>
							$ {product.price.toFixed(2)}
						</span>
					) : (
						<Skeleton className="product-details-description" />
					)}

          {/* product add to cart section */}
					{product && (
						<AddToCartSection 
							count={productAddedCount}
							subtractProductCartCount={subtractProductCartCount}
							addProductCartCount={addProductCartCount}
						/>
					)}
				</div>
			</div>
		</section>
	)
}

// export default component
export default ProductDetails;