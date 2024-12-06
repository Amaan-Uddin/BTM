import MessageIcon from '../../assets/SVG/message.svg'
import BellIcon from '../../assets/SVG/bell.svg'
import Icons from '@/components/utils/Icons'
import Profile from '@/components/utils/Profile'
import ProfilePic from '@/assets/Profile/thorfinn.jpg'
import HoverProfile from './HoverProfile'
import NavSheets from './NavSheets'
import HoverTooltip from '@/components/utils/HoverTooltip'
function Navigation() {
	return (
		<div>
			<nav className="container flex items-center justify-end py-6">
				<div className="nav-menu flex items-center gap-6 pr-6">
					<div className="menu flex items-center gap-4">
						<NavSheets title={'Messages'} content={'messages'}>
							<HoverTooltip name={'messages'}>
								<Icons src={MessageIcon} className={'w-7'} />
							</HoverTooltip>
						</NavSheets>
						<NavSheets title={'Notifications'} content={'notifications'}>
							<HoverTooltip name={'notifications'}>
								<Icons src={BellIcon} className={'w-7'} />
							</HoverTooltip>
						</NavSheets>
					</div>
					<HoverProfile>
						<Profile src={ProfilePic} />
					</HoverProfile>
				</div>
			</nav>
		</div>
	)
}
export default Navigation
