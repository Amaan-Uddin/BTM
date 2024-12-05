import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Separator } from '@/components/ui/separator'
import { Button } from '../ui/button'
import SheetComponent from './SheetComponent'

function Purchase() {
	return (
		<div className="tw-container tw-mx-auto">
			<Card>
				<CardHeader className="tw-justify-center">
					<div className="tw-m-0">
						<CardDescription>1 - 29 sets</CardDescription>
						<CardTitle className="tw-text-2xl">$1,888.00</CardTitle>
					</div>
					<Separator orientation="vertical" />
					<div className="tw-m-0">
						<CardDescription>30 - 49 sets</CardDescription>
						<CardTitle className="tw-text-2xl">$1,788.00</CardTitle>
					</div>
					<Separator orientation="vertical" />
					<div className="tw-m-0">
						<CardDescription>&gt;= 50 sets</CardDescription>
						<CardTitle className="tw-text-2xl">$1,688.00</CardTitle>
					</div>
				</CardHeader>
				<CardContent>
					<div className="tw-mb-6">
						<h2 className="tw-font-semibold tw-text-xl">Variation</h2>
						<div className="tw-flex tw-flex-col tw-gap-1">
							<h3 className="tw-font-semibold tw-my-2">4 Plug Type:</h3>
							<ToggleGroup variant="outline" type="multiple">
								<SheetComponent>
									<ToggleGroupItem value="AU" size="lg">
										AU
									</ToggleGroupItem>
								</SheetComponent>
								<SheetComponent>
									<ToggleGroupItem value="EU" size="lg">
										EU
									</ToggleGroupItem>
								</SheetComponent>
								<SheetComponent>
									<ToggleGroupItem value="UK" size="lg">
										UK
									</ToggleGroupItem>
								</SheetComponent>
								<SheetComponent>
									<ToggleGroupItem value="US" size="lg">
										US
									</ToggleGroupItem>
								</SheetComponent>
							</ToggleGroup>
						</div>
						<div className="tw-flex tw-flex-col tw-gap-1">
							<h3 className="tw-font-semibold tw-my-2">Color:</h3>
							<ToggleGroup variant="outline" type="single">
								<SheetComponent>
									<ToggleGroupItem value="White" size="lg">
										White
									</ToggleGroupItem>
								</SheetComponent>
							</ToggleGroup>
						</div>
					</div>
					<Separator orientation="horizontal" />
					<div className="tw-my-6">
						<h2 className="tw-font-semibold tw-text-xl tw-mb-2">Shipping</h2>
						<p className="tw-mb-2">
							Shipping solutions for the selected quantity are currently unavailable
						</p>
						<div className="tw-flex tw-gap-2">
							<SheetComponent>
								<Button className="tw-bg-yellow-300">Start order request</Button>
							</SheetComponent>
							<Button className="tw-bg-white">Contact supplier</Button>
						</div>
					</div>
					<Separator orientation="horizontal" />
					<div className="tw-mt-6">
						<h2 className="tw-font-semibold tw-text-xl tw-mb-4">Protection for this product</h2>
						<div>
							<h3 className="tw-font-semibold tw-my-2">Secure payments</h3>
							<p>
								Every payment you make on Alibaba.com is secured with strict SSL encryption and PCI DSS
								data protection protocols
							</p>
						</div>
						<div>
							<h3 className="tw-font-semibold tw-my-2">Standard refund policy</h3>
							<p>
								Claim a refund if your order doesn&apos;t ship, is missing, or arrives with product
								issues
							</p>
						</div>
					</div>
				</CardContent>
				<CardFooter>
					<p className="tw-text-gray-500 tw-text-sm">
						Alibaba.com protects all your orders placed and paid on the platform with
						<span className="tw-text-yellow-300 tw-text-sm"> Trade Assurance</span>
					</p>
				</CardFooter>
			</Card>
		</div>
	)
}
export default Purchase
