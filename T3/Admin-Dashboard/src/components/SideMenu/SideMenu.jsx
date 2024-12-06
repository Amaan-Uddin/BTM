import Icons from '@/components/utils/Icons'
import { Link } from 'react-router'
import { MenuOptions } from '@/assets/Data/SideMenuOptions'

function SideMenu() {
	return (
		<div className="fixed">
			<div className="logo py-6">
				<h1 className="text-4xl text-secondary font-extrabold flex items-center">Dashboard</h1>
			</div>
			<div className="flex flex-col pl-4 gap-6">
				{MenuOptions.map((options) => (
					<div key={options.id}>
						<Link className="flex gap-3 items-center capitalize">
							<Icons src={options.src} className={'w-5'} />
							<span className="option text-lg text-secondary font-semibold">{options.option}</span>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}
export default SideMenu
