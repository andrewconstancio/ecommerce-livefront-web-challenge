import React from "react";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getProductById } from "../data";
import { FaMinus, FaPlus } from "react-icons/fa";
import AddToCartSection from '../components/AddToCartSection';
import ErrorPage from "../ErrorPage";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductDetails = () => {

	// product id url param
	const { id } = useParams();

	// product fetched from API by id
	const [product, setProduct] = useState(null);

	// API error
	const [error, setError] = useState(null);

	// product added to cart counter
	const [productAddedCount, setProductAddedCount] = useState(0);

	// fetch product details on component render
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

	const subtractProductCartCount = () => {
		if(productAddedCount > 0) {
			setProductAddedCount(prevValue => prevValue - 1);
		}
	};

	const addProductCartCount = () => {
		setProductAddedCount(prevValue => prevValue + 1);
	};

	if(error) {
		return <ErrorPage />
	}

	return (
		<section className="content-section-product-details" >
			<div className="product-details-section">
				<div className="product-details-images">
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
					{product && product.title ? (
						<span 
							className="product-details-title"
							aria-label={`Product title ${product.title}`}>
							{product.title}
						</span>
					) : (
						<Skeleton className="product-details-title" />
					)}
					{product && product.description ? (
						<span 
							className="product-details-description"
							aria-label={`Product description ${product.description}`}>
							{product.description}
						</span>
					) : (
						<Skeleton className="product-details-description" />
					)}
					{product && product.description ? (
						<span 
							className="product-details-description"
							aria-label={`Product description ${product.description}`}>
							{product.description}
						</span>
					) : (
						<Skeleton className="product-details-description" />
					)}
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

export default ProductDetails;