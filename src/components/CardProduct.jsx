import { Link } from "react-router-dom"
import React from 'react';
import AddToCartButton from "./AddToCartButton";

const CardProduct = ({ product }) => {

	// if there is a missing property on the product prop we will return null for the component
	if(!product || !product.image || !product.title || !product.category || !product.price) {
		return null;
	}

	// return the main html content for this component
	return (
		<div className="product-item">
			<Link to={`/product/${product.id}`}>
				{/* product main image */}
				<img 
					className="product-item-image" 
					loading="lazy" 
					src={product.image} 
					alt={`${product.title} image`}
				/>

				{/* product category */}
				<span 
					className="product-item-category"
					aria-label={`Product category ${product.category}`}>
						{product.category}
				</span>

				{/* product title */}
				<span 
					className="product-item-title"
					aria-label={`Product title ${product.title}`}>
						{product.title}
				</span>
				
				{/* product price to the hundres decimal place */}
				<span 
					className="product-item-pricing"
					aria-label={`Product pricing ${product.price}`}>
					$ {product.price.toFixed(2)}
				</span>
			</Link>

			{/* add to cart button component */}
			<AddToCartButton customClass={"product-item-add-to-cart-button"} />
		</div>
	)
}

// export default component
export default CardProduct;