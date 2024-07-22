import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
	return (
		<section className="hero-section">
			<div className="hero-section-image">
				<div className="hero-section-content">
					<h1>BIGGEST SALE OF THE SEASON</h1>
					<h2>Shop now to save big</h2>
					<p>Explore the best quality electronics, jewelry, men's and women's clothing</p>
					<Link className="hero-section-show-now-link" href="">Shop Now</Link>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;