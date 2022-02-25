import React from 'react';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
	return (
		<div>
			<h1>Feed Layout</h1>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default UserLayout;
