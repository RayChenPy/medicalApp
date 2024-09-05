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
							<a className="nav-link" href="#">Home <span className="sr-only"></span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">My Medications</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">My Calendar</a>
						</li>
						<li className="nav-item">
							<Link href="/Login">
								Log in
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
