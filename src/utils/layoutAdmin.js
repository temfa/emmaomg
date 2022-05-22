import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import "./layoutHome.css";

const LayoutAdmin = ({ children }) => {
	return (
		<div className='container'>
			<div className='page-container' id='page-container'>
				<Header />
			</div>
			<div className='page-container'>{children}</div>
			<Footer />
		</div>
	);
};

export default LayoutAdmin;
