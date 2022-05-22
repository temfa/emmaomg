import React, { useEffect } from "react";
import Footer from "../components/footer/footer";
import Headertest from "../components/header/headertest";
import "./layout.css";
import { db } from "./firebase-config";
import { ref, onValue } from "firebase/database";

const Layout = ({ children }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
		let pageContainer = document.getElementById("page-container");
		onValue(ref(db), (snapshot) => {
			const data = snapshot.val();
			if (data.faajiFriday.faajiFriday === false) {
				pageContainer.style.width = "83%";
			} else if (data.faajiFriday.faajiFriday === true) {
				pageContainer.style.width = "90%";
			}
		});
	}, []);
	return (
		<div className='container'>
			<div className='head-container' id='page-container'>
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
