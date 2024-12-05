import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { cva } from 'class-variance-authority'
import { X } from 'lucide-react'

import { cn } from '@/lib/utils'

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => (
	<SheetPrimitive.Overlay
		className={cn(
			'tw-fixed tw-inset-0 tw-z-50 tw-bg-black/80 tw-data-[state=open]:animate-in tw-data-[state=closed]:animate-out tw-data-[state=closed]:fade-out-0 tw-data-[state=open]:fade-in-0',
			className
		)}
		{...props}
		ref={ref}
	/>
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
	'tw-fixed tw-z-50 tw-gap-4 tw-bg-background tw-p-6 tw-shadow-lg tw-transition tw-ease-in-out tw-data-[state=closed]:duration-300 tw-data-[state=open]:duration-500 tw-data-[state=open]:animate-in tw-data-[state=closed]:animate-out',
	{
		variants: {
			side: {
				top: 'tw-inset-x-0 tw-top-0 tw-border-b tw-data-[state=closed]:slide-out-to-top tw-data-[state=open]:slide-in-from-top',
				bottom: 'tw-inset-x-0 tw-bottom-0 tw-border-t tw-data-[state=closed]:slide-out-to-bottom tw-data-[state=open]:slide-in-from-bottom',
				left: 'tw-inset-y-0 tw-left-0 tw-h-full tw-w-3/4 tw-border-r tw-data-[state=closed]:slide-out-to-left tw-data-[state=open]:slide-in-from-left tw-sm:max-w-sm',
				right: 'tw-inset-y-0 tw-right-0 tw-h-full tw-w-3/4 tw-border-l tw-data-[state=closed]:slide-out-to-right tw-data-[state=open]:slide-in-from-right tw-sm:max-w-sm',
			},
		},
		defaultVariants: {
			side: 'right',
		},
	}
)

const SheetContent = React.forwardRef(({ side = 'right', className, children, ...props }, ref) => (
	<SheetPortal>
		<SheetOverlay />
		<SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
			<SheetPrimitive.Close className="tw-absolute tw-right-4 tw-top-4 tw-rounded-sm tw-opacity-70 tw-ring-offset-background tw-transition-opacity tw-hover:opacity-100 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-ring tw-focus:ring-offset-2 tw-disabled:pointer-events-none tw-data-[state=open]:bg-secondary">
				<X className="tw-h-4 tw-w-4" />
				<span className="tw-sr-only">Close</span>
			</SheetPrimitive.Close>
			{children}
		</SheetPrimitive.Content>
	</SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({ className, ...props }) => (
	<div className={cn('tw-flex tw-flex-col tw-space-y-2 tw-text-center tw-sm:text-left', className)} {...props} />
)
SheetHeader.displayName = 'SheetHeader'

const SheetFooter = ({ className, ...props }) => (
	<div
		className={cn('tw-flex tw-flex-col-reverse tw-sm:flex-row tw-sm:justify-end tw-sm:space-x-2', className)}
		{...props}
	/>
)
SheetFooter.displayName = 'SheetFooter'

const SheetTitle = React.forwardRef(({ className, ...props }, ref) => (
	<SheetPrimitive.Title
		ref={ref}
		className={cn('tw-text-2xl tw-font-semibold tw-text-foreground', className)}
		{...props}
	/>
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef(({ className, ...props }, ref) => (
	<SheetPrimitive.Description ref={ref} className={cn('', className)} {...props} />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
	Sheet,
	SheetPortal,
	SheetOverlay,
	SheetTrigger,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetFooter,
	SheetTitle,
	SheetDescription,
}
