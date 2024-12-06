import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import Profile from '@/components/utils/Profile'
import ProfilePic from '@/assets/Profile/thorfinn.jpg'

function HoverProfile({ children }) {
	return (
		<HoverCard>
			<HoverCardTrigger>{children}</HoverCardTrigger>
			<HoverCardContent className="h-[100px] p-4">
				<div className="flex gap-4 items-center">
					<Profile className={'w-16 h-16'} src={ProfilePic} />
					<div className="flex flex-col">
						<span className="font-normal">M.Amaanuddin</span>
						<span className="font-light">Admin</span>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	)
}
export default HoverProfile
