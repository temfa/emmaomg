import React from "react";
import Footer from "../components/footer/footer";
import Headertest from "../components/header/headertest";
import "./layout.css";

const Layout = ({ children }) => {
	return (
		<div className='container'>
			<div className='head-container'>
				<Headertest />
			</div>
			<div className='pages-container'>
				<div className='body-container'>{children}</div>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
