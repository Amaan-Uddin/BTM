import { Outlet } from 'react-router'
import { Separator } from '../ui/separator'
import Navigation from '@/components/Navigation/Navigation'
import SideMenu from '@/components/SideMenu/SideMenu'
import Hero from '@/components/Hero/Hero'
import Footer from '@/components/Footer/Footer'
function Layout() {
	return (
		<div className="container mx-auto px-4">
			<div className="hero flex">
				<div className="w-1/6 relative">
					<SideMenu />
				</div>
				<Separator orientation="vertical" />
				<div className="w-5/6">
					<Navigation />
					<Hero />
				</div>
			</div>
			<Footer />
		</div>
	)
}
export default Layout
