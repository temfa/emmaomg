import React, { useEffect, useState } from "react";
import LayoutAdmin from "../../utils/layoutAdmin";
import "./ticket.css";
import { db, storage } from "../../utils/firebase-config";
import { ref, set, onValue } from "firebase/database";
import {
	ref as imgref,
	uploadBytes,
	listAll,
	getDownloadURL,
	deleteObject,
} from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const Ticket = () => {
	let navigate = useNavigate();

	const [ticketData, setTicketData] = useState([]);
	const [newTicket, setNewTicket] = useState(false);
	const [newImage, setNewImage] = useState(false);
	const [uploadImage, setUploadImage] = useState("");
	const [imageList, setImageList] = useState("");
	const [ticketDetails, setTicketDetails] = useState({
		title: "",
		amount: "",
		description: "",
		id: 0,
	});
	const displayImage = () => {
		listAll(imageListRef).then((response) => {
			getDownloadURL(response.items[response.items.length - 1]).then((url) => {
				setImageList(url);
			});
		});
	};
	const imageListRef = imgref(storage, "images/");

	useEffect(() => {
		onValue(ref(db), (snapshot) => {
			const data = snapshot.val();
			if (data) {
				setTicketData(Object.values(data.faajiTickets)[0]);
			}
		});
		displayImage();
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
			ticketData,
		});
		set(ref(db, "faajiDetails"), {
			date: date.value,
		});
		date.value = "";
		window.scrollTo(0, 0);
		toast.success("Updated Successfully!!!!");
	};
	const handleInputChange = (e, id, key) => {
		let tempTicketData = ticketData.map((el) =>
			id === el.id ? { ...el, [key]: e.target.value } : el
		);
		setTicketData(tempTicketData);
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
									listAll(imageListRef).then((response) => {
										response.items.forEach((item) => {
											getDownloadURL(item).then((url) => {
												const desertRef = imgref(storage, url);
												deleteObject(desertRef)
													.then(() => {
														const imageRef = imgref(
															storage,
															`images/${uploadImage.name + v4()}`
														);
														uploadBytes(imageRef, uploadImage).then(() => {
															window.scrollTo(0, 0);
															toast.success("Uploaded Successfully!!!!");
															displayImage();
															setNewImage(false);
														});
													})
													.catch((error) => {
														console.log(error);
													});
											});
										});
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
							{ticketData.map((ticket, index) => (
								<div className='ticket-group ticket-groups' key={index}>
									<div className='ticket-cont1'>
										<input
											type='text'
											placeholder='Ticket Title'
											className='ticket-title'
											name='ticketTitle1'
											value={ticket.title}
											onChange={(e) => handleInputChange(e, ticket.id, "title")}
										/>
										<input
											type='text'
											placeholder='Amount'
											className='ticket-amount'
											value={ticket.amount}
											onChange={(e) =>
												handleInputChange(e, ticket.id, "amount")
											}
										/>
									</div>
									<input
										type='text'
										placeholder='Description'
										className='ticket-description'
										value={ticket.description}
										onChange={(e) =>
											handleInputChange(e, ticket.id, "description")
										}
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
														id: ticketData.length + 1,
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
									<button id='save-ticket' onClick={saveNewTicket}>
										Save New Ticket
									</button>
								</>
							)}
							<button id='submit-ticket' type='submit'>
								Submit Tickets
							</button>
						</form>
					</div>
				</div>
			</div>
		</LayoutAdmin>
	);
};

export default Ticket;
