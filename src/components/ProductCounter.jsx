import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductCounter = ({count, subtractProductCartCount, addProductCartCount}) => {
	return (
		<div className="product-added-to-cart-plus-minus">
			<button 
				className="product-counter-button" 
				onClick={subtractProductCartCount}
				aria-label="Remove one product from the cart">
				<FaMinus />
			</button>
			<span 
				className="font-bold" 
				aria-label={`${count} items added to cart`}>
					{count}
			</span>
			<button 
				className="product-counter-button" 
				onClick={addProductCartCount}
				aria-label="Add one product from the cart">
				<FaPlus />
			</button>
		</div>
	);
}

export default ProductCounter;
