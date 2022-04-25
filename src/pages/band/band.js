import React from "react";
import "./band.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Band = () => {
	return (
		<>
			<div className='band-container'>
				<Header />
				<div className='band-header'>
					<h2>My Band</h2>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Band;
