import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { useLayoutEffect } from 'react'
import { BrowserRouter, useLocation } from "react-router-dom";


const ScrollWrapper = ({children}) => {
	const location = useLocation();
	useLayoutEffect(() => {
		document.documentElement.scrollTo(0, 0);
	}, [location.pathname]);
	return children
} 

ReactDOM.createRoot(document.getElementById('root')).render(
	
	<React.StrictMode>
		<BrowserRouter>
			<ScrollWrapper>
				<App />
			</ScrollWrapper>
		</BrowserRouter>
	</React.StrictMode>,
)