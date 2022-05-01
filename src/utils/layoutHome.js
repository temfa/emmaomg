import React from "react";
import Footer from "../components/footer/footer";
import Headertest from "../components/header/headertest";
import "./layoutHome.css";

const LayoutHome = ({ children }) => {
	return (
		<div className='container'>
			<div className='page-container'>
				<Headertest />
			</div>
			<div className='page-container'>{children}</div>
			<Footer />
		</div>
	);
};

export default LayoutHome;
