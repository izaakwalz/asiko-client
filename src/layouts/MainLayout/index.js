import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<div>
			<h1>Landing Page</h1>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default MainLayout;
