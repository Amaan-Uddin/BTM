import { Outlet } from 'react-router'
import Navigation from '../main/Navigation'
function MainLayout() {
	return (
		<div>
			<Navigation />
			<Outlet />
		</div>
	)
}
export default MainLayout
