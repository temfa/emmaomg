import React, { useEffect } from "react";
import LayoutAdmin from "../../utils/layoutAdmin";
import "./video.css";
import Emma from "../../assets/image 15.png";
import { db } from "../../utils/firebase-config";
import { set, ref } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Video = () => {
	let navigate = useNavigate();
	useEffect(() => {
		let authToken = sessionStorage.getItem("Auth Token");

		if (!authToken) {
			navigate("/emma");
		}
	});
	const writeToDatabase = () => {
		let link = document.getElementById("link");
		set(ref(db, "youtubeLink"), {
			youtubeLink: link.value,
		});
		link.value = "";
		window.scrollTo(0, 0);
		toast.success("Updated Successfully!!!!");
	};
	const uploadLink = (event) => {
		event.preventDefault();
		writeToDatabase();
	};
	return (
		<LayoutAdmin>
			<ToastContainer />
			<div className='video-container'>
				<div className='video-img'>
					<img src={Emma} alt='Emma' />
				</div>
				<div className='video-text'>
					<h2>Faaji Friday Videos</h2>
					<p>
						Faaji Friday is the signature event of EmmaOMG and the OhEmGee Band.
						It's an evening of unwinding with family and friends to serenading
						sounds, laughter, songs of praise, and party vibes. Audience can
						expect elevated performances from EmmaOMG and the OhEmGee Band.
					</p>
					<div className='input-link'>
						<form onSubmit={uploadLink}>
							<input
								type='text'
								placeholder='Youtube Link...'
								required
								id='link'
							/>
							<button type='submit'>Change</button>
						</form>
					</div>
				</div>
			</div>
		</LayoutAdmin>
	);
};

export default Video;
