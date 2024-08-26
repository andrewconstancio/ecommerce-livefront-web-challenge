import React from "react";
import CardProduct from "./CardProduct";
import Skeleton from 'react-loading-skeleton'

const ProductGrid = ({ sectionTitle, products, isLoading }) => {

	// if the loading state passed in true we will return a grid view of loader skeletons for the product cards
	if(isLoading) {
		return (
			<section data-testid="product-grid-loader-section-grid" className="content-section">
				<div className="content-product-section">

          {/* render 10 skelton product card components */}
					{Array(10).fill().map((_, index) => (
							<Skeleton key={index} className="product-item"  />
					))}
          
				</div>
			</section>
		);
	}

	// if there are not products passing in through props we will return null for this component
	if(!products) {
		return null;
	}

	// return the main html content for this component
	return (
		<section id={sectionTitle} className="content-section">
      {/* if a section title is passed through by a prop render the grid title */}
			{sectionTitle && (
				<span className="product-grid-title" aria-label={`${sectionTitle}`}>{sectionTitle}</span>
			)}

      {/* map over the product array passed by props and display the card product component */}
			<div className="content-product-section">
				{products.map(product => {
					return <CardProduct key={product.id} product={product} />
				})}
			</div>
		</section>
	)
}

export default ProductGrid;