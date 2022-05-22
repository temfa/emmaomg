import React, { useEffect, useState } from "react";
import "./faajipage.css";
import Emma from "../../assets/image 14.png";
import Arrowup from "../../assets/Vector 8.png";
import Arrowdown from "../../assets/Vector 7.png";
import Headertest from "../../components/header/headertest";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";
import { db } from "../../utils/firebase-config";
import { ref, onValue } from "firebase/database";

const Faajiadmin = () => {
	const [numbers, setNumbers] = useState(1);
	const [email, setEmail] = useState("");

	useEffect(() => {
		let numberTicket = document.getElementById("number-of-tickets");
		let addNumbers = document.getElementById("addNumbers");
		let numberPeople = document.getElementById("number-of-people");
		let price = document.getElementById("price");
		let removeNumbers = document.getElementById("removeNumbers");
		let regular = document.getElementById("regular");
		let faajiadminDetails = document.getElementById("faajiadmin-details");
		let faajiadminSelect = document.getElementById("faajiadmin-select");
		let count = 1;
		let vip = document.getElementById("vip");
		let seat = document.getElementById("seat");

		onValue(ref(db), (snapshot) => {
			const data = snapshot.val();
			if (data !== null) {
				const item = Object.values(data.faajiTickets);
				item.map((e) => {
					faajiadminSelect.innerHTML += `
						<option  value=${e.ticketPrice} onClick="test()" >
							${e.ticketName} - #${e.ticketPrice}
						</option>	
					`;
				});
			}
		});
		const test = (e) => {
			console.log("e.target");
		};

		addNumbers.addEventListener("click", () => {
			count += 1;
			setNumbers(count);
			let newPrice = localStorage.getItem("currentprice");
			let latestPrice = newPrice * count;
			price.innerText = `#${latestPrice}`;
			numberTicket.value = setNumbers + 1;
			numberPeople.innerText = `Admits ${count} person(s)`;
			localStorage.setItem("price", latestPrice);
		});

		removeNumbers.addEventListener("click", () => {
			let newPrice = localStorage.getItem("currentprice");
			let newsestprice = price.textContent.slice(1);
			if (count === 1) {
				count = 1;
				setNumbers(count);
				price.innerText = `#${newPrice}`;
			} else {
				count -= 1;
				setNumbers(count);
				let latestPrice = newsestprice - newPrice;
				price.innerText = `#${latestPrice}`;
				numberTicket.value = setNumbers;
				numberPeople.innerText = `Admits ${count} person(s)`;
			}
		});

		// regular.addEventListener("click", (e) => {
		// 	faajiadminDetails.style.display = "block";
		// 	price.innerText += e.target.value;
		// 	numberPeople.innerText += `Admits 1 person(s)`;
		// 	localStorage.setItem("price", e.target.value);
		// 	localStorage.setItem("currentprice", e.target.value);
		// });
		// vip.addEventListener("click", (e) => {
		// 	faajiadminDetails.style.display = "block";
		// 	price.innerText += e.target.value;
		// 	numberPeople.innerText += `Admits 1 person(s)`;
		// 	localStorage.setItem("price", e.target.value);
		// 	localStorage.setItem("currentprice", e.target.value);
		// });
		// seat.addEventListener("click", (e) => {
		// 	faajiadminDetails.style.display = "block";
		// 	price.innerText += e.target.value;
		// 	numberPeople.innerText += `Admits 1 person(s)`;
		// 	localStorage.setItem("price", e.target.value);
		// 	localStorage.setItem("currentprice", e.target.value);
		// });
	}, []);
	const publicKey = "pk_test_7fb90bd8aa7b5f58930828f02a247d2a950ad4d2";

	let price = localStorage.getItem("price");
	let navigate = useNavigate();
	const amount = price * 100;
	const componentProps = {
		email,

		amount,

		publicKey,

		text: "Pay With Paystack",

		onSuccess: () => {
			alert("Yout Ticket has been sent to your Email");
			navigate("/");
		},

		onClose: () => alert("Wait! Don't leave :("),
	};
	return (
		<div className='container-faaji'>
			<div className='faajiadmin-body'>
				<Headertest />
				<div className='faajiadmin-container'>
					<div className='faajiadmin-img'>
						<img src={Emma} alt='Emma' />
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
							<select name='' id='faajiadmin-select'>
								<option value='' selected>
									Choose Ticket Type
								</option>
							</select>
							<input type='number' value={numbers} id='number-of-tickets' />
							<img
								src={Arrowup}
								alt='arrow'
								className='arrowup'
								id='addNumbers'
							/>
							<img
								src={Arrowdown}
								alt='arrow'
								className='arrowdown'
								id='removeNumbers'
							/>
						</div>
						<div className='faajiadmin-details' id='faajiadmin-details'>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
								cumque tenetur accusantium deserunt ullam veritatis minima
								delectus ipsum. Nesciunt doloremque dolores non voluptatibus
								facere quaerat earum explicabo unde aperiam fugiat.
							</p>
							<div id='price-tag'>
								<h2 id='price'>#</h2>
								<span id='number-of-people'></span>
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Faajiadmin;
