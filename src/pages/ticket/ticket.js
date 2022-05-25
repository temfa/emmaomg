import React, { useEffect, useState } from "react";
import LayoutAdmin from "../../utils/layoutAdmin";
import "./ticket.css";
import { db, storage } from "../../utils/firebase-config";
import { ref, set } from "firebase/database";
import {
	ref as imgref,
	uploadBytes,
	listAll,
	getDownloadURL,
} from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const Ticket = () => {
	let navigate = useNavigate();
	let ticketData = [
		{
			title: "Regular",
			amount: "5000",
			description: "Regular Lorem Ipsum",
		},
		{
			title: "VIP",
			amount: "25000",
			description: "VIP Lorem Ipsum",
		},
		{
			title: "Seat Table",
			amount: "50000",
			description: "Seat Lorem Ipsum",
		},
	];

	const [newTicket, setNewTicket] = useState(false);
	const [newImage, setNewImage] = useState(false);
	const [uploadImage, setUploadImage] = useState("");
	const [imageList, setImageList] = useState("");
	const [ticketDetails, setTicketDetails] = useState({
		title: "",
		amount: "",
		description: "",
	});

	let newTicketData = window.localStorage.getItem("Tickets");
	let latestTicketData = JSON.parse(newTicketData)
		? JSON.parse(newTicketData)
		: ticketData;
	const imageListRef = imgref(storage, "images/");
	useEffect(() => {
		localStorage.setItem("Tickets", JSON.stringify(ticketData));
		listAll(imageListRef).then((response) => {
			getDownloadURL(response.items[response.items.length - 1]).then((url) => {
				setImageList(url);
			});
		});
	}, []);
	const saveNewTicket = (e) => {
		e.preventDefault();
		ticketData[ticketData.length] = ticketDetails;
		localStorage.setItem("Tickets", JSON.stringify(ticketData));
		setTicketDetails({
			title: "",
			amount: "",
			description: "",
		});
	};

	const createTicket = (e) => {
		let date = document.getElementById("date");
		e.preventDefault();

		set(ref(db, "faajiTickets"), {
			latestTicketData,
		});
		set(ref(db, "faajiDetails"), {
			date: date.value,
		});
		date.value = "";
		window.scrollTo(0, 0);
		toast.success("Updated Successfully!!!!");
	};
	return (
		<LayoutAdmin>
			<ToastContainer />
			<div className='ticket-container'>
				<div className='ticket-img'>
					<img src={imageList} alt='emma' />
					<label
						onClick={() => {
							setNewImage(true);
						}}>
						<input
							type='file'
							name=''
							id=''
							onChange={(e) => {
								setUploadImage(e.target.files[0]);
							}}
						/>
						Change Image
					</label>
					{newImage && (
						<>
							<input
								type='text'
								value={uploadImage.name}
								onChange={(e) => {
									setUploadImage(e.target.value);
								}}
							/>
							<button
								onClick={() => {
									const imageRef = imgref(
										storage,
										`images/${uploadImage.name + v4()}`
									);
									uploadBytes(imageRef, uploadImage).then(() => {
										window.scrollTo(0, 0);
										toast.success("Uploaded Successfully!!!!");
										navigate("/ticket");
									});
								}}>
								Save Image
							</button>
						</>
					)}
				</div>
				<div className='ticket-details'>
					<h2>Upload Faaji Details</h2>
					<div className='ticket-details-body'>
						<form onSubmit={createTicket}>
							<div className='ticket-group'>
								<div className='ticket-cont'>
									<input type='date' name='date' id='date' />
									<button
										onClick={(e) => {
											e.preventDefault();
											setNewTicket(!newTicket);
										}}>
										{newTicket ? "Close" : "Show"} Ticket Form
									</button>
								</div>
							</div>
							{latestTicketData.map((ticket, index) => (
								<div className='ticket-group ticket-groups' key={index}>
									<div className='ticket-cont1'>
										<input
											type='text'
											placeholder='Ticket Title'
											className='ticket-title'
											name='ticketTitle1'
											value={ticket.title}
										/>
										<input
											type='text'
											placeholder='Amount'
											className='ticket-amount'
											value={ticket.amount}
										/>
									</div>
									<input
										type='text'
										placeholder='Description'
										className='ticket-description'
										value={ticket.description}
									/>
								</div>
							))}
							{newTicket && (
								<>
									{" "}
									<div className='ticket-group ticket-groups'>
										<div className='ticket-cont1'>
											<input
												type='text'
												placeholder='Ticket Title'
												className='ticket-title'
												value={ticketDetails.title}
												onChange={(e) =>
													setTicketDetails({
														...ticketDetails,
														title: e.target.value,
													})
												}
											/>
											<input
												type='text'
												placeholder='Amount'
												className='ticket-amount'
												value={ticketDetails.amount}
												onChange={(e) =>
													setTicketDetails({
														...ticketDetails,
														amount: e.target.value,
													})
												}
											/>
										</div>
										<input
											type='text'
											placeholder='Description'
											className='ticket-description'
											value={ticketDetails.description}
											onChange={(e) =>
												setTicketDetails({
													...ticketDetails,
													description: e.target.value,
												})
											}
										/>
									</div>
									<button onClick={saveNewTicket}>Save New Ticket</button>
								</>
							)}
							<button type='submit'>Submit Tickets</button>
						</form>
					</div>
				</div>
			</div>
		</LayoutAdmin>
	);
};

export default Ticket;
