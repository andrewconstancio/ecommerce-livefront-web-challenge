import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductCounter = ({ count, subtractProductCartCount, addProductCartCount }) => {

  // return the main html content for this component
	return (
		<div className="product-added-to-cart-plus-minus">
      
      {/* descrease product added to cart count */}
			<button 
				className="product-counter-button" 
				onClick={subtractProductCartCount}
				aria-label="Remove one product from the cart">
				<FaMinus />
			</button>

      {/* number of items added to cart */}
			<span 
				className="font-bold" 
				aria-label={`${count} items added to cart`}>
					{count}
			</span>

      {/* inscrease product added to cart count */}
			<button 
				className="product-counter-button" 
				onClick={addProductCartCount}
				aria-label="Add one product from the cart">
				<FaPlus />
			</button>
		</div>
	);
}

// export default component
export default ProductCounter;
