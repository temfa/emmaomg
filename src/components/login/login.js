import React from "react";
import LayoutHome from "../../utils/layoutHome";
import "./login.css";
import { NavLink } from "react-router-dom";

const Login = (props) => {
	const { email, setEmail, password, setPassword, emailError, passwordError } =
		props;
	return (
		<LayoutHome>
			<div className='login-body'>
				<h2>{props.title} Form</h2>

				<div className='login-group'>
					<input
						type='email'
						name=''
						id=''
						autoComplete='off'
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label className='label-name' htmlFor='email'>
						<span className='content-details'>Email</span>
					</label>
					<p className='error'>{emailError}</p>
				</div>
				<div className='login-group'>
					<input
						type='password'
						name=''
						id=''
						autoComplete='off'
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<label className='label-name' htmlFor='password'>
						<span className='content-details'>Password</span>
					</label>
					<p className='error'>{passwordError}</p>
				</div>
				<div className='button-div'>
					<button onClick={props.action}>{props.title}</button>
					<NavLink to={props.link} activeclassname='is-active'>
						{props.text}
					</NavLink>
				</div>
			</div>
		</LayoutHome>
	);
};

export default Login;
