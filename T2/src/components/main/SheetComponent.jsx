import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { CardDescription, CardTitle } from '../ui/card'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
function SheetComponent({ children }) {
	return (
		<Sheet>
			<SheetTrigger>{children}</SheetTrigger>
			<SheetContent side="right" className="tw-w-[400px]">
				<SheetHeader>
					<SheetTitle className=" tw-font-semibold tw-text-start">Select Variation and Quantity</SheetTitle>
					<SheetDescription>
						<div className="tw-flex tw-gap-4 tw-my-4">
							<div className="tw-m-0">
								<CardDescription>1 - 29 sets</CardDescription>
								<CardTitle className="tw-text-2xl tw-text-black">$1,888.00</CardTitle>
							</div>
							<Separator orientation="vertical" />
							<div className="tw-m-0">
								<CardDescription>30 - 49 sets</CardDescription>
								<CardTitle className="tw-text-2xl tw-text-black">$1,788.00</CardTitle>
							</div>
							<Separator orientation="vertical" />
							<div className="tw-m-0">
								<CardDescription>&gt;= 50 sets</CardDescription>
								<CardTitle className="tw-text-2xl tw-text-black">$1,688.00</CardTitle>
							</div>
						</div>
						<div className="tw-flex tw-flex-col tw-gap-1 tw-mb-4">
							<h3 className="tw-font-semibold tw-my-2 tw-text-lg tw-text-start">4 Plug Type:</h3>
							<ToggleGroup variant="outline" type="multiple">
								<ToggleGroupItem value="AU" size="lg">
									AU
								</ToggleGroupItem>
								<ToggleGroupItem value="EU" size="lg">
									EU
								</ToggleGroupItem>
								<ToggleGroupItem value="UK" size="lg">
									UK
								</ToggleGroupItem>
								<ToggleGroupItem value="US" size="lg">
									US
								</ToggleGroupItem>
							</ToggleGroup>
						</div>
						<div className="tw-flex tw-flex-col tw-gap-1 tw-mb-4">
							<h3 className="tw-font-semibold tw-my-2 tw-text-lg tw-text-start">Color:</h3>
							<ToggleGroup variant="outline" type="single">
								<ToggleGroupItem value="White" size="lg">
									White
								</ToggleGroupItem>
							</ToggleGroup>
						</div>
						<div>
							<h2 className="tw-font-semibold tw-text-lg tw-mb-2 tw-text-start">Shipping</h2>
							<p className="tw-mb-2 tw-text-start">
								Shipping solutions for the selected quantity are currently unavailable
							</p>
						</div>
						<div className="tw-bottom-0 tw-w-full tw-pt-6">
							<Button className="tw-bg-yellow-300 tw-w-full">Order</Button>
						</div>
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	)
}
export default SheetComponent
