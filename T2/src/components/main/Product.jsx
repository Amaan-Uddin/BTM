import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '../ui/card'
import VerticalCarousel from './VerticalCarousel'
import Recommendation from './Recommendation'
import Specifications from './Specifications'
import HeatPump from '@/assets/heatpump.webp'
import DialogComponent from './DialogComponent'

function Product() {
	return (
		<div className="container tw-py-6 tw-px-8">
			<h1 className="tw-font-semibold tw-text-xl">
				Puremind Gree Air Source to Water Heat Pump Water Heater Factory OEM Heating And Supplying Hot Water
				Heat Pump
			</h1>
			<div></div>
			<div className="tw-flex tw-mt-6 tw-bg-slate-50 tw-py-10 tw-rounded-lg tw-px-4">
				<div className="tw-w-1/3">
					<VerticalCarousel />
				</div>
				<div className="tw-w-2/3">
					<Carousel className="tw-w-full">
						<CarouselContent>
							{Array.from({ length: 5 }).map((_, index) => (
								<CarouselItem key={index} className="tw-flex tw-justify-center">
									<div className="tw-w-[350px] tw-h-[300px]">
										<Card className="tw-w-full tw-h-full tw-items-center tw-flex tw-justify-center">
											<DialogComponent
												trigger={
													<CardContent className="tw-flex tw-items-center tw-justify-center p-2">
														<img src={HeatPump} alt="" />
													</CardContent>
												}
												content={<img src={HeatPump} alt="" />}
											/>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="tw-rounded-[100%]" />
						<CarouselNext className="tw-rounded-[100%]" />
					</Carousel>
				</div>
			</div>
			<div className="tw-my-8">
				<h1 className="tw-font-bold tw-text-xl">Other recommendations for your business</h1>
				<Recommendation />
			</div>
			<hr />
			<div>
				<Specifications />
			</div>
		</div>
	)
}
export default Product
