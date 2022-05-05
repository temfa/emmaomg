import React from "react";
import LayoutHome from "../../utils/layoutHome";
import "./login.css";

const Login = () => {
	return (
		<LayoutHome>
			<div className='login-body'>
				<h2>Welcome Back!</h2>
				<div className='login-group'>
					<input type='text' name='' id='' autoComplete='off' required />
					<label className='label-name' htmlFor='username'>
						<span className='content-details'>Username</span>
					</label>
				</div>
				<div className='login-group'>
					<input type='password' name='' id='' autoComplete='off' required />
					<label className='label-name' htmlFor='password'>
						<span className='content-details'>Password</span>
					</label>
				</div>
				<button>Login</button>
			</div>
		</LayoutHome>
	);
};

export default Login;
