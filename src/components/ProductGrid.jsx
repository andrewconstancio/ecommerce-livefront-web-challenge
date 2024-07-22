import CardProduct from "./CardProduct";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductGrid = ({sectionTitle, products, isLoading}) => {

	// if loading state is passed in render skeleton view
	if(isLoading) {
		return (
			<section className="content-section">
				<div className="content-product-section">
					{Array(10).fill().map((_, index) => (
						<div key={index} className="product-item">
							<Skeleton />
						</div>
					))}
				</div>
			</section>
		);
	}

	// if no products are pass by props return null
	if(!products) {
		return null;
	}

	// component main content
	return (
		<section className="content-section">
			{sectionTitle && (
				<span className="product-grid-title" aria-label={`${sectionTitle}`}>{sectionTitle}</span>
			)}
			<div className="content-product-section">
				{products.map(product => {
					return <CardProduct key={product.id} product={product} />
				})}
			</div>
		</section>
	)
}


export default ProductGrid;