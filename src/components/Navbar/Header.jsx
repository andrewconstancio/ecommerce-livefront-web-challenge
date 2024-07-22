import React from 'react';
import Navbar from "./Navbar.jsx";
import MobileNav from "./MobileNavBar.jsx";

const Header = () => {
	return (
	  <header className="nav-area">
		{/* desktop nav bar */}
		<Navbar />

		{/* mobile nav bar */}
		<MobileNav />
	  </header>
	)
}
  
export default Header