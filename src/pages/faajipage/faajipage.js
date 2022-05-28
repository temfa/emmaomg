import React, { useEffect, useState } from "react";
import "./faajipage.css";
import Arrowup from "../../assets/Vector 8.png";
import Arrowdown from "../../assets/Vector 7.png";
import Headertest from "../../components/header/headertest";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { db, storage } from "../../utils/firebase-config";
import { ref as imgref, listAll, getDownloadURL } from "firebase/storage";

const Faajiadmin = () => {
	const [counts, setCounts] = useState(1);
	const [email, setEmail] = useState("");
	const [faajiAdmin, setFaajiAdmin] = useState(false);
	const [ticketDetail, setTicektDetail] = useState({});
	const [ticketPrice, setTicketPrice] = useState(0);
	const [ticketOptions, setTicketOptions] = useState([]);
	const [imageList, setImageList] = useState("");

	const addNumbers = () => {
		setCounts(counts + 1);
		let latestPrice = ticketDetail.amount * (counts + 1);
		setTicketPrice(latestPrice);
	};

	const removeNumbers = () => {
		if (counts === 1) {
			setCounts(counts);
			setTicketPrice(ticketDetail.amount);
		} else {
			setCounts(counts - 1);
			let latestPrice = ticketPrice - ticketDetail.amount;
			setTicketPrice(latestPrice);
		}
	};
	const imageListRef = imgref(storage, "images/");
	useEffect(() => {
		getTicketOptions();
		listAll(imageListRef).then((response) => {
			getDownloadURL(response.items[response.items.length - 1]).then((url) => {
				setImageList(url);
			});
		});
	});
	const publicKey = "pk_test_7fb90bd8aa7b5f58930828f02a247d2a950ad4d2";

	let navigate = useNavigate();
	const amount = ticketPrice * 100;
	const componentProps = {
		email,

		amount,

		publicKey,

		text: "Pay With Paystack",

		onSuccess: () => {
			window.scrollTo(0, 0);
			let popup = document.getElementById("popup");
			popup.classList.add("emma-active");
		},
	};
	const getTicketOptions = () => {
		onValue(ref(db), (snapshot) => {
			const data = snapshot.val();
			if (data) {
				setTicketOptions(Object.values(data.faajiTickets)[0]);
			}
		});
	};
	const handleTicketOptionClick = (e) => {
		ticketOptions.map((ticket) => {
			if (e.target.value === ticket.amount) {
				setTicektDetail(ticket);
				setFaajiAdmin(true);
				setCounts(1);
				setTicketPrice(ticket.amount);
			}
		});
	};
	return (
		<div className='container-faaji'>
			<div className='faajiadmin-body'>
				<Headertest />
				<div className='faajiadmin-container'>
					<div className='faajiadmin-img'>
						<img src={imageList} alt='Emma' />
					</div>
					<div className='faajiadmin-text'>
						<h2>Faaji Friday Tickets</h2>
						<p>
							Faaji Friday is the signature event of EmmaOMG and the OhEmGee
							Band. It's an evening of unwinding with family and friends to
							serenading sounds, laughter, songs of praise, and party vibes.
							Audience can expect elevated performances from EmmaOMG and the
							OhEmGee Band.
						</p>
						<div className='faajiadmin-select'>
							<select
								name=''
								id='faajiadmin-select'
								onChange={handleTicketOptionClick}>
								<option value='' defaultValue='Choose Ticket Type'>
									Choose Ticket Type
								</option>
								{ticketOptions.map((ticket) => (
									<option key={ticket.title} value={ticket.amount}>
										{ticket.title} - #{ticket.amount}
									</option>
								))}
							</select>
							<input
								type='number'
								value={counts}
								onChange={(e) => {
									setCounts(Number(e.target.value));
									setTicketPrice(Number(e.target.value) * ticketDetail.amount);
								}}
							/>
							<img
								src={Arrowup}
								alt='arrow'
								className='arrowup'
								onClick={addNumbers}
							/>
							<img
								src={Arrowdown}
								alt='arrow'
								className='arrowdown'
								onClick={removeNumbers}
							/>
						</div>
						{faajiAdmin && (
							<div className='faajiadmin-details' id='faajiadmin-details'>
								<p>{ticketDetail.description}</p>
								<div id='price-tag'>
									<h2 id='price'>#{ticketPrice}</h2>
									<span id='number-of-people'>Admits {counts} person(s)</span>
								</div>
								<div className='form-group'>
									<input
										type='text'
										id='email'
										placeholder='Enter Email'
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
								<PaystackButton {...componentProps} />
								<div className='popup center' id='popup'>
									<h2 id='popup-message'>Payment Successful!!!!!!</h2>
									<p>Check your mail for your Tickets</p>
									<button
										id='yes'
										onClick={() => {
											navigate("/");
										}}>
										Close
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Faajiadmin;
