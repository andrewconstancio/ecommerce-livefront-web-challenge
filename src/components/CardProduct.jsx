import { Link } from "react-router-dom"
import React from 'react';
import AddToCartButton from "./AddToCartButton";

const CardProduct = ({product}) => {

	// if all properites of product are not there return null
	if(!product || !product.image || !product.title || !product.category || !product.price) {
		return null;
	}

	return (
		<div className="product-item">
			<Link to={`/product/${product.id}`}>
				<img 
					className="product-item-image" 
					loading="lazy" 
					src={product.image} 
					alt={`${product.title} image`}
				/>
				<span 
					className="product-item-category"
					aria-label={`Product category ${product.category}`}>
						{product.category}
				</span>
				<span 
					className="product-item-title"
					aria-label={`Product title ${product.title}`}>
						{product.title}
				</span>
				<span 
					className="product-item-pricing"
					aria-label={`Product pricing ${product.price}`}>
					$ {product.price.toFixed(2)}
				</span>
			</Link>
			<AddToCartButton customClass={"product-item-add-to-cart-button"} />
		</div>
	)
}
export default CardProduct;