import React, { useState } from 'react'
import { Button } from '@mui/material'
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

const Signup = () => {

	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		firstname: '',
		lastname: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
		  ...formData,
		  [name]: value,
		});
	};
	

	const register = async () => {
		
		console.log('signup test');
		console.log('backendUrl: ', backendUrl);
		try {
			const response = await fetch(`${backendUrl}/signup`, {
			  method: 'POST',
			  headers: {
				'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(formData),
			});
	  
			if (response.ok) {
			  const result = await response.json();
			  console.log('User registered successfully:', result);
			} else {
			  console.error('Failed to register user');
			}
		  } catch (error) {
			console.error('Error:', error);
		  }
	};


	return (
		<>
			<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
			
			<div className='wrapper'>
				<h1>Create an account!</h1>
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
					type='text'
					name='email'
					placeholder='Email'
					value={formData.email}
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

				<div className='input-box'>
				<input
					type='text'
					name='firstname'
					placeholder='First Name'
					value={formData.firstname}
					onChange={handleChange}
					required
				/>
				</div>

				<div className='input-box'>
				<input
					type='text'
					name='lastname'
					placeholder='Last Name'
					value={formData.lastname}
					onChange={handleChange}
					required
				/>
				</div>
				<Button 
					variant="contained"
					onClick={register}
				>
					Register
				</Button>

				<div className='signUp-link'>
					<p>Already have an account?
						<a href='/Login'> Log in here!</a>
					</p>
				</div>
			</div>
		</>
	)
}

export default Signup
