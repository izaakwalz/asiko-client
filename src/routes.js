import { useRoutes } from 'react-router-dom';
// Layouts
import MainLayout from 'layouts/MainLayout';
import UserLayout from 'layouts/UserLayout';
// Pages
import { FeedPage, HomePage } from 'pages';

export default function Routes() {
	return useRoutes([
		{
			path: '/user',
			element: <UserLayout />,
			children: [{ path: '', element: <FeedPage /> }],
		},
		{
			path: '/',
			element: <MainLayout />,
			children: [{ path: '/', element: <HomePage /> }],
		},
	]);
}
