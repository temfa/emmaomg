import React, { useState } from "react";
import Login from "../../components/login/login";
import { app } from "../../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";

const Emma = (props) => {
	let navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const clearInputs = () => {
		setEmail("");
		setPassword("");
	};
	const handleAction = () => {
		const authentication = getAuth();
		if (props.title === "Login") {
			signInWithEmailAndPassword(authentication, email, password)
				.then((response) => {
					navigate("/emmaadmin");
					sessionStorage.setItem(
						"Auth Token",
						response._tokenResponse.refreshToken
					);
					clearInputs();
				})
				.catch((error) => {
					console.log(error.code);
					if (error.code === "auth/wrong-password") {
						toast.error("Please check the Password");
					}
					if (error.code === "auth/user-not-found") {
						toast.error("Please check the Email");
					}
				});
		} else if (props.title === "Register") {
			createUserWithEmailAndPassword(authentication, email, password)
				.then((response) => {
					navigate("/emma");
					sessionStorage.setItem(
						"Auth Token",
						response._tokenResponse.refreshToken
					);
					clearInputs();
				})
				.catch((error) => {
					if (error.code === "auth/email-already-in-use") {
						toast.error("Email Already in Use");
					}
				});
		}
	};

	return (
		<>
			<ToastContainer />
			<Login
				title={props.title}
				text={props.text}
				link={props.link}
				action={handleAction}
				email={email}
				setEmail={setEmail}
				password={password}
				setPassword={setPassword}
				// handleLogin={handleLogin}
				// handleSignUp={handleSignUp}
				// hasAccount={hasAccount}
				// setHasAccount={setHasAccount}
				// emailError={emailError}
				// setEmailError={setEmailError}
				// passwordError={passwordError}
				// setPasswordError={setPasswordError}
			/>
		</>
	);
};

export default Emma;
