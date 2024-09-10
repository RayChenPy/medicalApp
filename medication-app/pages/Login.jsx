import React, { useState } from 'react'
import './css/Login.css'
import { Button } from '@mui/material'
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

const Login = () => {

	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
		  ...formData,
		  [name]: value,
		});
	};


	const login = async () => {
		console.log('login test');
		try{
			const response = await fetch(`${backendUrl}/login`, {
				method: 'POST',
				headers: {
				  'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			  });
		}catch(error){
			console.error('Error:', error);
		}
	}


	return (
		<>
			<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
			
			<div className='wrapper'>
				<h1>Login</h1>
				<div className='input-box'>
					<input 
						type='text' 
						name='username'
						placeholder='Username' 
						value={formData.username}
						onChange={handleChange}
						required 
					/>
				</div>

				<div className='input-box'>
					<input 
						type='password' 
						name='password'
						placeholder='Password' 
						value={formData.password}
						onChange={handleChange}
						required
					/>
				</div>
				<Button 
					variant="contained"
					onClick={login}
				>
					Login
				</Button>

				<div className='signUp-link'>
					<p>Don&apost;t have an account?  
						<a href='#'> Sign up here!</a></p>
				</div>
			</div>
		</>
	)
}

export default Login
