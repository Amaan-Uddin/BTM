import { Outlet } from 'react-router'
import Navigation from '../main/Navigation'
function MainLayout() {
	return (
		<>
			<Navigation />
			<Outlet />
		</>
	)
}
export default MainLayout
