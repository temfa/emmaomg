import React from "react";
import "./emmaadmin.css";
import LayoutHome from "../../utils/layoutHome";
import { db } from "../../utils/firebase-config";
import { set, ref } from "firebase/database";

const Emmaadmin = () => {
	window.addEventListener("DOMContentLoaded", () => {
		let faajiCheckbox = document.getElementById("faaji-checkbox");
		let popupMessage = document.getElementById("popup-message");
		let popup = document.getElementById("popup");
		let label = document.getElementById("label");
		let yes = document.getElementById("yes");
		let no = document.getElementById("no");
		faajiCheckbox.addEventListener("click", (e) => {
			console.log(faajiCheckbox.checked);
			popup.classList.add("emma-active");
			yes.addEventListener("click", () => {
				if (faajiCheckbox.checked) {
					label.classList.add("test");
				} else {
					label.classList.remove("test");
				}

				popup.classList.remove("emma-active");
			});
			no.addEventListener("click", () => {
				if (faajiCheckbox.checked) {
					faajiCheckbox.checked = false;
					console.log(faajiCheckbox.checked);
				} else {
					faajiCheckbox.checked = true;
				}
				popup.classList.remove("emma-active");
			});
			if (faajiCheckbox.checked) {
				popupMessage.innerText = "Are you sure you want to enable Faaji Friday";
			} else {
				popupMessage.innerText =
					"Are you sure you want to disable Faaji Friday";
			}
		});
	});
	const writeToDatabase = () => {
		let link = document.getElementById("link");
		set(ref(db, "youtubeLink"), {
			youtubeLink: link.value,
		});
		link.value = "";
	};
	const uploadLink = (event) => {
		event.preventDefault();
		writeToDatabase();
	};
	return (
		<LayoutHome>
			<div className='admin'>
				<div className='faaji-friday'>
					<h4>Enable Faaji Friday</h4>
					<label id='label'>
						<input type='checkbox' id='faaji-checkbox' />
						<span>
							<i></i>
						</span>
					</label>
					<div className='popup center' id='popup'>
						<p id='popup-message'></p>
						<div className='popup-buttons'>
							<button id='yes'>Yes</button>
							<button id='no'>No</button>
						</div>
					</div>
				</div>
				<div className='video-of-the-week'>
					<h2>Video Of the Week</h2>
					<form onSubmit={uploadLink}>
						<input
							type='text'
							placeholder='Youtube Link...'
							required
							id='link'
						/>
						<button type='submit'>Upload</button>
					</form>
				</div>
			</div>
		</LayoutHome>
	);
};

export default Emmaadmin;
