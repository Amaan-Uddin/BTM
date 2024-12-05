import * as React from 'react'

import { cn } from '@/lib/utils'

const Card = React.forwardRef(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn('tw-rounded-xl tw-border tw-bg-card tw-text-card-foreground tw-shadow', className)}
		{...props}
	/>
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('tw-flex tw-items-center tw-gap-4 tw-p-6', className)} {...props} />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('tw-font-semibold tw-leading-none tw-tracking-tight', className)} {...props} />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('tw-text-sm tw-text-muted-foreground', className)} {...props} />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('tw-p-6 tw-pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('tw-flex tw-items-center tw-p-6 tw-pt-0', className)} {...props} />
))
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
