import logo from '@/assets/BTM.png'
import { Link, useLocation } from 'react-router'

function NavLink({ to, children }) {
	const currentLocation = useLocation()

	const isActive = currentLocation.pathname === to
	return (
		<Link className={`nav-link ${isActive ? 'active' : ''}`} to={to}>
			{children}
		</Link>
	)
}

function Navigation() {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid tw-px-7">
				<Link className="navbar-brand tw-size-16 tw-flex tw-items-center" to="/">
					<img src={logo} alt="" />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink to={'/'}>Home</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to={'/about'}>About</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to={'/categories'}>Categories</NavLink>
						</li>
						<li className="nav-item ">
							<NavLink to={'/register'}>Register</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
export default Navigation
