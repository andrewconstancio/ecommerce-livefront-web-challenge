import Header from "./components/Navbar/Header"
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import ProductCategory from "./pages/ProductCategory"
import ProductDetails from "./pages/ProductDetails"
import React from 'react';
import RouteNotFoundPage from './RouteNotFoundPage';
import Footer from "./components/Footer"

const App = () => {

	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/category/:name" element={<ProductCategory />} />
					<Route path="/product/:id" element={<ProductDetails />} />
					<Route path='*' element={<RouteNotFoundPage />} />
				</Routes>
			</main>
			<Footer />
		</>
	)
}

export default App;


