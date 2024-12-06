import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

function HoverTooltip({ children, name }) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>{children}</TooltipTrigger>
				<TooltipContent>
					<p>{name}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
export default HoverTooltip
