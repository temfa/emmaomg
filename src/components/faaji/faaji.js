import React, { useEffect } from "react";
import "./faaji.css";
import Emma5 from "../../assets/emma5.png";
import { db } from "../../utils/firebase-config";
import { ref, update, onValue } from "firebase/database";

const Faaji = () => {
	useEffect(() => {
		let popupMessage = document.getElementById("popup-message");
		let popup = document.getElementById("popup");
		let statusText = document.getElementById("status-text");
		let statusColor = document.getElementById("status-color");
		let yes = document.getElementById("yes");
		let no = document.getElementById("no");
		let enableFaaji = document.getElementById("enableFaaji");
		let disableFaaji = document.getElementById("disableFaaji");
		onValue(ref(db), (snapshot) => {
			const data = snapshot.val();
			if (data.faajiFriday.faajiFriday === false) {
				statusText.textContent = "Offline";
				disableFaaji.disabled = true;
			} else if (data.faajiFriday.faajiFriday === true) {
				statusText.textContent = "Online";
				enableFaaji.disabled = true;
				statusColor.style.backgroundColor = "green";
			}
		});

		enableFaaji.addEventListener("click", () => {
			popup.classList.add("emma-active");
			popupMessage.innerText = " enable Faaji Friday from Homepage";
		});
		disableFaaji.addEventListener("click", () => {
			popup.classList.add("emma-active");
			popupMessage.innerText = " Disable Faaji Friday from Homepage";
		});
		yes.addEventListener("click", () => {
			popup.classList.remove("emma-active");
			if (statusText.textContent === "Offline") {
				statusText.textContent = "Online";
				statusColor.style.backgroundColor = "green";
				enableFaaji.disabled = true;
				disableFaaji.disabled = false;
				update(ref(db, "faajiFriday"), {
					faajiFriday: true,
				});
			} else if (statusText.textContent === "Online") {
				statusText.textContent = "Offline";
				statusColor.style.backgroundColor = "red";
				enableFaaji.disabled = false;
				disableFaaji.disabled = true;
				update(ref(db, "faajiFriday"), {
					faajiFriday: false,
				});
			}
		});

		no.addEventListener("click", () => {
			popup.classList.remove("emma-active");
		});
	}, []);
	return (
		<div className='faaji-container'>
			<div className='faaji-container-img'>
				<img src={Emma5} alt='Emma' />
				<div className='status'>
					<div id='status-color'></div>
					<p id='status-text'></p>
				</div>
			</div>
			<div className='faaji-text'>
				<h2>Faaji Friday </h2>
				<button className='enable' id='enableFaaji'>
					Enable
				</button>
				<button className='disable' id='disableFaaji'>
					Disable
				</button>
			</div>
			<div className='popup center' id='popup'>
				<h2 id='popup-message'>none</h2>
				<button id='yes'>Yes</button>
				<button id='no'>No</button>
			</div>
		</div>
	);
};

export default Faaji;
