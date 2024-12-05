import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '@/components/ui/dialog'

function DialogComponent({ trigger, content }) {
	return (
		<Dialog>
			<DialogTrigger>{trigger}</DialogTrigger>
			<DialogContent className="tw-rounded-xl">
				<DialogHeader>
					<DialogDescription>{content}</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
export default DialogComponent
