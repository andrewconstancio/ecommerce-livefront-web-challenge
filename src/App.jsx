import Header from "./components/Navbar/Header"
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import ProductCategory from "./pages/ProductCategory"
import ProductDetails from "./pages/ProductDetails"
import React from 'react';
import RouteNotFoundPage from './RouteNotFoundPage';
import Footer from "./components/Footer"
import DealsInformation from "./pages/DealsInformation";
import NewFeatured from "./pages/NewFeatured"
import PickupDelivery from "./pages/PickUpDelivery"

const App = () => {

	return (
		<>
			{/* Render the header of the application */}
			<Header />

			{/* Main content area */}
			<main>
				<Routes>
					{/* Route for the homepage */}
					<Route path="/" element={<Home />} />
					
					{/* Route for the product category page */}
					<Route path="/category/:name" element={<ProductCategory />} />

					{/* Route for the product details page */}
					<Route path="/product/:id" element={<ProductDetails />} />

					{/* Route for the new & features page */}
					<Route path="/newfeatured" element={<NewFeatured />} />

					{/* Route for deal inforation page */}
					<Route path="/deals" element={<DealsInformation />} />

					{/* Route for pickup & delivery page */}
					<Route path="/pickupdelivery" element={<PickupDelivery />} />

					{/* Route route not found page */}
					<Route path='*' element={<RouteNotFoundPage />} />
				</Routes>
			</main>

			{/* Render the footer of the application */}
			<Footer />
		</>
	)
}

export default App;


