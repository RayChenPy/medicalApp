import React from 'react';
import Link from 'next/link';

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link className="nav-link" href="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="/Medication">
								My Medications
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="/Calendar">
								My Calendar
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="/Login">