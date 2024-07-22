import React from "react";
import AddToCardButton from "../components/AddToCartButton";
import ProductCounter from "./ProductCounter";

const AddToCartSection = ({ count, subtractProductCartCount, addProductCartCount }) => {
	return (
		<div className="product-details-add-to-cart-section">
			{/* plus / minus add to car buttons */}
			<ProductCounter 
				count={count}
				subtractProductCartCount={subtractProductCartCount} 
				addProductCartCount={addProductCartCount} 
			/>
			{/* add to card button component */}
			<AddToCardButton customClass={"product-details-add-to-cart-button"} />
		</div>
	)
};

export default AddToCartSection;