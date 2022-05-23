import React from "react";
import LayoutAdmin from "../../utils/layoutAdmin";
import "./ticket.css";
import Emma from "../../assets/image 14.png";
import { db } from "../../utils/firebase-config";
import { ref, set } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Ticket = () => {
	const createTicket = (e) => {
		let count = 0;
		e.preventDefault();
		let ticketGroups = document.getElementsByClassName("ticket-groups");
		for (const child of ticketGroups) {
			count += 1;
			let ticketDetails = {
				ticketName: child.firstElementChild.firstElementChild.value,
				ticketPrice: child.firstElementChild.lastElementChild.value,
				ticketDescription: child.lastElementChild.value,
			};
			let ticketDetail = [];
			ticketDetail[count - 1] = ticketDetails;
			console.log(ticketDetail);
			// set(ref(db, "faajiTickets"), {
			// 	ticketDetails,
			// });
			// window.scrollTo(0, 0);
			// toast.success("Updated Successfully!!!!");
		}
		// set(ref(db, "faajiDetails"), {
		// 	date: date.value,
		// });
		// date.value = "";
	};
	return (
		<LayoutAdmin>
			<ToastContainer />
			<div className='ticket-container'>
				<div className='ticket-img'>
					<img src={Emma} alt='emma' />
					<button>Change Image</button>
				</div>
				<div className='ticket-details'>
					<h2>Upload Faaji Details</h2>
					<div className='ticket-details-body'>
						<form onSubmit={createTicket}>
							<div className='ticket-group'>
								<div className='ticket-cont'>
									<input type='date' name='date' />
									<button>Add Ticket</button>
								</div>
							</div>
							<div className='ticket-group ticket-groups'>
								<div className='ticket-cont1'>
									<input
										type='text'
										placeholder='Ticket Title'
										className='ticket-title'
										name='ticketTitle1'
									/>
									<input
										type='text'
										placeholder='Amount'
										className='ticket-amount'
									/>
								</div>
								<input
									type='text'
									placeholder='Description'
									className='ticket-description'
								/>
							</div>
							<div className='ticket-group ticket-groups'>
								<div className='ticket-cont1'>
									<input
										type='text'
										placeholder='Ticket Title'
										className='ticket-title'
									/>
									<input
										type='text'
										placeholder='Amount'
										className='ticket-amount'
									/>
								</div>
								<input
									type='text'
									placeholder='Description'
									className='ticket-description'
								/>
							</div>
							<div className='ticket-group ticket-groups'>
								<div className='ticket-cont1'>
									<input
										type='text'
										placeholder='Ticket Title'
										className='ticket-title'
									/>
									<input
										type='text'
										placeholder='Amount'
										className='ticket-amount'
									/>
								</div>
								<input
									type='text'
									placeholder='Description'
									className='ticket-description'
								/>
							</div>
							<button type='submit'>Submit</button>
						</form>
					</div>
				</div>
			</div>
		</LayoutAdmin>
	);
};

export default Ticket;
