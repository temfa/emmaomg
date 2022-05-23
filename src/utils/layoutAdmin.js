import React from "react";
import Header from "../components/header/header";
import "./layoutHome.css";

const LayoutAdmin = ({ children }) => {
	return (
		<div className='container'>
			<div className='page-container' id='page-container'>
				<Header />
			</div>
			<div className='page-container'>{children}</div>
		</div>
	);
};

export default LayoutAdmin;
