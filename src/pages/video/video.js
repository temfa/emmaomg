import React, { useEffect, useState } from "react";
import LayoutAdmin from "../../utils/layoutAdmin";
import "./video.css";
import { db } from "../../utils/firebase-config";
import { set, ref, onValue } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Video = () => {
	let navigate = useNavigate();
	const [videoLink, updatedVideoLink] = useState("");
	useEffect(() => {
		let authToken = sessionStorage.getItem("Auth Token");

		if (!authToken) {
			navigate("/emma");
		}
	});
	useEffect(() => {
		onValue(ref(db), (snapshot) => {
			const data = snapshot.val();
			if (data !== null) {
				updatedVideoLink(data.youtubeLink.youtubeLink);
			}
		});
	}, []);
	const writeToDatabase = () => {
		set(ref(db, "youtubeLink"), {
			youtubeLink: videoLink,
		});
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
				<div className='video-text'>
					<h2>Video of the Week</h2>
					<div className='input-link'>
						<form onSubmit={uploadLink}>
							<input
								type='text'
								placeholder='Youtube Link...'
								required
								value={videoLink}
								onChange={(e) => {
									updatedVideoLink(e.target.value);
								}}
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
