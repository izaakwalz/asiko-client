import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

const UserLayout = () => {
	return (
		<div>
			{/* <h1>Feed Layout</h1> */}
			<Navbar />
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default UserLayout;
