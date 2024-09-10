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
			  body: JSON.stringify(formDat