import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<div className='bg-grey-300'>
			<h1>Landing Page</h1>
			<main className='bg-grey-300'>
				<Outlet />
			</main>
		</div>
	);
};

export default MainLayout;
