import React, { useEffect, useState } from "react";
import "./emmaadmin.css";
import Faaji from "../../components/faaji/faaji";
import { useNavigate } from "react-router-dom";
import LayoutAdmin from "../../utils/layoutAdmin";
import { db } from "../../utils/firebase-config";
import { ref, set } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Emmaadmin = () => {
	const [regular, setRegular] = useState("Regular");
	const [regularPrice, setRegularPrice] = useState("5000");
	const [regularNoSeat, setRegularNoSeat] = useState("200");
	const [regularDescription, setRegularDescription] = useState(
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis nisi, nam soluta consequatur tempora officia libero atque dignissimos reiciendis velit ullam voluptatem sunt quo doloribus, minus eaque, vitae blanditiis accusantium."
	);
	const [vip, setVip] = useState("VIP");
	const [vipPrice, setVipPrice] = useState("25000");
	const [vipNoSeat, setVipNoSeat] = useState("200");
	const [vipDescription, setVipDescription] = useState(
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis nisi, nam soluta consequatur tempora officia libero atque dignissimos reiciendis velit ullam voluptatem sunt quo doloribus, minus eaque, vitae blanditiis accusantium."
	);
	const [seat, setSeat] = useState("Seat at the Silver Table");
	const [seatPrice, setSeatPrice] = useState("50000");
	const [seatNoSeat, setSeatNoSeat] = useState("200");
	const [seatDescription, setSeatDescription] = useState(
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis nisi, nam soluta consequatur tempora officia libero atque dignissimos reiciendis velit ullam voluptatem sunt quo doloribus, minus eaque, vitae blanditiis accusantium."
	);

	let navigate = useNavigate();
	useEffect(() => {
		let authToken = sessionStorage.getItem("Auth Token");

		if (!authToken) {
			navigate("/emma");
		}
	});
	const writeToDatabase = () => {
		let date = document.getElementById("date");
		let regularDetails = {
			ticketName: regular,
			ticketPrice: regularPrice,
			ticketNoSeat: regularNoSeat,
			ticketDescription: regularDescription,
		};
		let vipDetails = {
			ticketName: vip,
			ticketPrice: vipPrice,
			ticketNoSeat: vipNoSeat,
			ticketDescription: vipDescription,
		};
		let seatDetails = {
			ticketName: seat,
			ticketPrice: seatPrice,
			ticketNoSeat: seatNoSeat,
			ticketDescription: seatDescription,
		};
		set(ref(db, "faajiDetails"), {
			date: date.value,
		});
		set(ref(db, "faajiTickets"), {
			regular: regularDetails,
			vip: vipDetails,
			seat: seatDetails,
		});
		date.value = "";
		window.scrollTo(0, 0);
		toast.success("Updated Successfully!!!!");
	};
	const uploadForm = (event) => {
		event.preventDefault();
		writeToDatabase();
	};

	const edit = (e) => {
		e.target.style.display = "none";
		e.target.nextSibling.style.display = "block";
		e.target.parentElement.parentElement.classList.add("tested");
		e.target.parentElement.children[0].value = "";
		e.target.parentElement.children[1].value = "";
		e.target.parentElement.parentElement.children[1].value = "";
		e.target.parentElement.parentElement.children[2].value = "";
	};
	const remove = (e) => {
		e.target.parentElement.parentElement.style.display = "none";
	};

	const finishedEdit = (e) => {
		e.target.parentElement.parentElement.classList.remove("tested");
		e.target.style.display = "none";
		e.target.previousSibling.style.display = "block";
	};
	return (
		<LayoutAdmin>
			<ToastContainer />
			<div className='admin'>
				<Faaji />
				<div className='faaji-form'>
					<h2>Upload Faaji Details</h2>
					<form onSubmit={uploadForm}>
						<input
							type='date'
							placeholder='Date'
							className='date'
							required
							id='date'
						/>
						<div className='details-group'>
							<div>
								<div>
									<input
										type='text'
										value={regular}
										onChange={(e) => {
											setRegular(e.target.value);
										}}
										placeholder='Ticket Type'
									/>
									<input
										type='text'
										value={regularPrice}
										onChange={(e) => {
											setRegularPrice(e.target.value);
										}}
										placeholder='Ticket Price'
									/>
									<i className='fas fa-edit' onClick={edit}></i>
									<i className='fas fa-check check' onClick={finishedEdit}></i>
									<i className='fas fa-trash' onClick={remove}></i>
								</div>
								<input
									type='text'
									value={regularNoSeat}
									onChange={(e) => {
										setRegularNoSeat(e.target.value);
									}}
									placeholder='No of Seat Available'
								/>
								<textarea
									name=''
									id=''
									placeholder='Enter Desciption'
									value={regularDescription}
									onChange={(e) => {
										setRegularDescription(e.target.value);
									}}></textarea>
							</div>
						</div>
						<div className='details-group'>
							<div>
								<div>
									<input
										type='text'
										value={vip}
										onChange={(e) => {
											setVip(e.target.value);
										}}
										placeholder='Ticket Type'
									/>
									<input
										type='text'
										value={vipPrice}
										onChange={(e) => {
											setVipPrice(e.target.value);
										}}
										placeholder='Ticket Price'
									/>
									<i className='fas fa-edit' onClick={edit}></i>
									<i className='fas fa-check check' onClick={finishedEdit}></i>
									<i className='fas fa-trash' onClick={remove}></i>
								</div>
								<input
									type='text'
									value={vipNoSeat}
									onChange={(e) => {
										setVipNoSeat(e.target.value);
									}}
									placeholder='No of Seat Available'
								/>
								<textarea
									name=''
									id=''
									placeholder='Enter Desciption'
									value={vipDescription}
									onChange={(e) => {
										setVipDescription(e.target.value);
									}}></textarea>
							</div>
						</div>
						<div className='details-group'>
							<div>
								<div>
									<input
										type='text'
										value={seat}
										onChange={(e) => {
											setSeat(e.target.value);
										}}
										placeholder='Ticket Type'
									/>
									<input
										type='text'
										value={seatPrice}
										onChange={(e) => {
											setSeatPrice(e.target.value);
										}}
										placeholder='Ticket Price'
									/>
									<i className='fas fa-edit' onClick={edit}></i>
									<i className='fas fa-check check' onClick={finishedEdit}></i>
									<i className='fas fa-trash' onClick={remove}></i>
								</div>
								<input
									type='text'
									value={seatNoSeat}
									onChange={(e) => {
										setSeatNoSeat(e.target.value);
									}}
									placeholder='No of Seat Available'
								/>
								<textarea
									name=''
									id=''
									placeholder='Enter Desciption'
									value={seatDescription}
									onChange={(e) => {
										setSeatDescription(e.target.value);
									}}></textarea>
							</div>
						</div>
						<button type='submit'>Submit</button>
					</form>
				</div>
			</div>
		</LayoutAdmin>
	);
};

export default Emmaadmin;
