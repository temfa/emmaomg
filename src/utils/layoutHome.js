import React, { useEffect } from "react";
import Footer from "../components/footer/footer";
import Headertest from "../components/header/headertest";
import "./layoutHome.css";
import { db } from "./firebase-config";
import { ref, onValue } from "firebase/database";

const LayoutHome = ({ children }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
		let pageContainer = document.getElementById("page-container");
		onValue(ref(db), (snapshot) => {
			const data = snapshot.val();
			if (data.faajiFriday.faajiFriday === false) {
				pageContainer.style.width = "83%";
			} else if (data.faajiFriday.faajiFriday === true) {
				pageContainer.style.width = "90%";
			} else {
				pageContainer.style.width = "83%";
			}
		});
	}, []);
	return (
		<div className='container'>
			<div className='page-container' id='page-container'>
				<Headertest />
			</div>
			<div className='page-container'>{children}</div>
			<Footer />
		</div>
	);
};

export default LayoutHome;
