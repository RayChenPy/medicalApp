import React from 'react'

const Signup = () => {
	return (
		<>
			<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
			<div className='wrapper'>
				<h1>Create an account!</h1>
					<div className='input-box'>
						<input type='text'
							placeholder='Email' required
						/>
					</div>

					<div className='input-box'>
						<input type='password'
							placeholder='Password' required
						/>
					</div>


				<button className='btn'
					type='submit'
				>
					Register
				</button>

				<div className='signUp-link'>
					<p>Already have an account?
						<a href='#'> Log in here!</a>
					</p>
				</div>
			</div>
		</>
	)
}

export default Signup
