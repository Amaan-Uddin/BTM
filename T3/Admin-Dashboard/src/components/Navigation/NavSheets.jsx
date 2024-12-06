import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Messages, Notifications } from '@/assets/Data/MessagesData'
import Profile from '@/components/utils/Profile'
function NavSheets({ children, title, content }) {
	const Data = content == 'messages' ? Messages : Notifications
	return (
		<Sheet>
			<SheetTrigger>{children}</SheetTrigger>
			<SheetContent side="right" className="w-[1000px] p-0">
				<SheetHeader>
					<SheetTitle className="text-secondary text-3xl font-bold p-6">{title}</SheetTitle>
					<SheetDescription>
						{Data.map((message, index) => (
							<span
								key={index}
								className={`flex items-end justify-start flex-col border-b border-b-1 py-3 px-6 ${
									message.status == 'read' ? 'bg-gray-100 opacity-75' : 'none'
								}`}
							>
								<div className="flex items-start gap-4">
									<div>
										<Profile src={message.src} />
									</div>
									<div className="flex flex-col">
										<span className="font-semibold">{message.name}</span>
										<span>{message.message}</span>
									</div>
								</div>
								<div>{message.time}</div>
							</span>
						))}
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	)
}
export default NavSheets
