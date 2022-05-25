import React, { useEffect } from "react";
import "./emmaadmin.css";
import Faaji from "../../components/faaji/faaji";
import { useNavigate } from "react-router-dom";
import LayoutAdmin from "../../utils/layoutAdmin";
import "react-toastify/dist/ReactToastify.css";

const Emmaadmin = () => {
	let navigate = useNavigate();
	useEffect(() => {
		let authToken = sessionStorage.getItem("Auth Token");

		if (!authToken) {
			navigate("/emma");
		}
	});

	return (
		<LayoutAdmin>
			<div className='admin'>
				<Faaji />
			</div>
		</LayoutAdmin>
	);
};

export default Emmaadmin;
