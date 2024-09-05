import React from 'react'
import '/pages/css/Login.css'

const Login = () => {
	return (
		<>
			<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
			
			<div className='wrapper'>
				<h1>Login</h1>
				<form>
					<div className='input-box'>
						<input type='text' 
						placeholder='Username' required />
					</div>

					<div className='input-box'>
						<input type='password' 
						placeholder='Password' required />
					</div>

					<button className='btn' 
					type='submit'>Login</button>

					<div className='signUp-link'>
						<p>Don&apost;t have an account?  
							<a href='#'> Sign up here!</a></p>
					</div>
				</form>
			</div>
		</>
	)
}

export default Login
