// import {
// 	NavigationMenu,
// 	NavigationMenuContent,
// 	NavigationMenuIndicator,
// 	NavigationMenuItem,
// 	NavigationMenuLink,
// 	NavigationMenuList,
// 	NavigationMenuTrigger,
// 	NavigationMenuViewport,
// } from '@/components/ui/navigation-menu'
import { Link } from 'react-router'
import Logo from '@/assets/BTM.png'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import SignupComponent from './SignupComponent'
// const components = [
// 	{
// 		title: 'Alert Dialog',
// 		href: '/docs/primitives/alert-dialog',
// 		description: 'A modal dialog that interrupts the user with important content and expects a response.',
// 	},
// 	{
// 		title: 'Hover Card',
// 		href: '/docs/primitives/hover-card',
// 		description: 'For sighted users to preview content available behind a link.',
// 	},
// 	{
// 		title: 'Progress',
// 		href: '/docs/primitives/progress',
// 		description:
// 			'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
// 	},
// 	{
// 		title: 'Scroll-area',
// 		href: '/docs/primitives/scroll-area',
// 		description: 'Visually or semantically separates content.',
// 	},
// 	{
// 		title: 'Tabs',
// 		href: '/docs/primitives/tabs',
// 		description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
// 	},
// 	{
// 		title: 'Tooltip',
// 		href: '/docs/primitives/tooltip',
// 		description:
// 			'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
// 	},
// ]

// import React from 'react'
// import { cn } from '@/lib/utils'

// const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
// 	return (
// 		<li>
// 			<NavigationMenuLink asChild>
// 				<Link
// 					ref={ref}
// 					className={cn(
// 						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
// 						className
// 					)}
// 					{...props}
// 				>
// 					<div className="text-sm font-medium leading-none">{title}</div>
// 					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
// 				</Link>
// 			</NavigationMenuLink>
// 		</li>
// 	)
// })

// ListItem.displayName = 'ListItem'

function Navigation() {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary tw-text-lg">
			<div className="container-fluid">
				<Link className="navbar-brand tw-size-16 tw-flex tw-items-center" to="/">
					<img src={Logo} alt="Logo" />
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 tw-gap-4">
						<li className="nav-item dropdown">
							<Link
								className="nav-link dropdown-toggle tw-cursor-pointer"
								id="categoriesDropdown"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Categories
							</Link>
							<ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
								<li>
									<Link className="dropdown-item" to="/category-1">
										Category 1
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" to="/category-2">
										Category 2
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" to="/category-3">
										Category 3
									</Link>
								</li>
							</ul>
						</li>

						<li className="nav-item dropdown">
							<Link
								className="nav-link dropdown-toggle tw-cursor-pointer"
								id="featuredDropdown"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Featured Selection
							</Link>
							<ul className="dropdown-menu" aria-labelledby="featuredDropdown">
								<li>
									<Link className="dropdown-item" to="/featured-1">
										Featured 1
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" to="/featured-2">
										Featured 2
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" to="/featured-3">
										Featured 3
									</Link>
								</li>
							</ul>
						</li>
						<li className="nav-item tw-flex tw-items-center">
							<SignupComponent>Register</SignupComponent>
						</li>
					</ul>

					<form className="tw-flex gap-2" role="search">
						<Input placeholder="search" className="tw-bg-white" />
						<Button className="tw-text-black tw-bg-yellow-300">Search</Button>
					</form>
				</div>
			</div>
		</nav>

		// <NavigationMenu>
		// 	<NavigationMenuList>
		// 		<NavigationMenuItem>
		// 			<NavigationMenuTrigger tw="text-lg font-medium">Getting started</NavigationMenuTrigger>
		// 			<NavigationMenuContent>
		// 				<ul className="tw-grid tw-gap-3 tw-p-6 md:tw-w-[400px] lg:tw-w-[500px] lg:tw-grid-cols-[.75fr_1fr]">
		// 					<li className="tw-row-span-3">
		// 						<NavigationMenuLink asChild>
		// 							<Link
		// 								className="tw-flex tw-h-full tw-w-full tw-select-none tw-flex-col tw-justify-end tw-rounded-md tw-bg-gradient-to-b tw-from-muted/50 tw-to-muted tw-p-6 tw-no-underline tw-outline-none tw-focus:tw-shadow-md"
		// 								to="/"
		// 							>
		// 								<div className="tw-mb-2 tw-mt-4 tw-text-lg tw-font-medium">shadcn/ui</div>
		// 								<p className="tw-text-sm tw-leading-tight tw-text-muted-foreground">
		// 									Beautifully designed components that you can copy and paste into your apps.
		// 									Accessible. Customizable. Open Source.
		// 								</p>
		// 							</Link>
		// 						</NavigationMenuLink>
		// 					</li>
		// 					<ListItem tw="tw-hover:tw-text-muted" to="/docs" title="Introduction">
		// 						Re-usable components built using Radix UI and Tailwind CSS.
		// 					</ListItem>
		// 					<ListItem tw="tw-hover:tw-text-muted" to="/docs/installation" title="Installation">
		// 						How to install dependencies and structure your app.
		// 					</ListItem>
		// 					<ListItem tw="tw-hover:tw-text-muted" to="/docs/primitives/typography" title="Typography">
		// 						Styles for headings, paragraphs, lists...etc
		// 					</ListItem>
		// 				</ul>
		// 			</NavigationMenuContent>
		// 		</NavigationMenuItem>
		// 		<NavigationMenuItem>
		// 			<NavigationMenuTrigger tw="text-lg font-medium">Components</NavigationMenuTrigger>
		// 			<NavigationMenuContent>
		// 				<ul className="tw-grid tw-w-[400px] tw-gap-3 tw-p-4 md:tw-w-[500px] md:tw-grid-cols-2 lg:tw-w-[600px] ">
		// 					{components.map((component) => (
		// 						<ListItem
		// 							key={component.title}
		// 							title={component.title}
		// 							to={component.href}
		// 							tw="tw-hover:tw-text-muted"
		// 						>
		// 							{component.description}
		// 						</ListItem>
		// 					))}
		// 				</ul>
		// 			</NavigationMenuContent>
		// 		</NavigationMenuItem>
		// 		<NavigationMenuItem>
		// 			<Link to="/docs" legacyBehavior passHref>
		// 				Documentation
		// 			</Link>
		// 		</NavigationMenuItem>
		// 	</NavigationMenuList>
		// </NavigationMenu>
	)
}

export default Navigation
