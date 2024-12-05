import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '../ui/card'
import HeatPump from '@/assets/heatpump.webp'
function Recommendation() {
	return (
		<div className="tw-my-3 tw-py-6 tw-bg-slate-50 tw-rounded-lg">
			<Carousel className="tw-w-full">
				<CarouselContent className="">
					{Array.from({ length: 10 }).map((_, index) => (
						<CarouselItem key={index} className="tw-flex tw-justify-center tw-basis-[23.9%]">
							<div className="tw-w-[150px] tw-h-[150px]">
								<Card className="tw-w-full tw-h-full tw-items-center tw-flex tw-justify-center">
									<CardContent className="tw-flex tw-items-center tw-justify-center p-2">
										<img src={HeatPump} alt="" />
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="tw-rounded-[100%]" />
				<CarouselNext className="tw-rounded-[100%]" />
			</Carousel>
		</div>
	)
}
export default Recommendation
