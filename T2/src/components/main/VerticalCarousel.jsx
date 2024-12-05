import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '../ui/card'
import HeatPump from '@/assets/heatpump.webp'
import DialogComponent from './DialogComponent'

function VerticalCarousel() {
	return (
		<Carousel opts={{ align: 'start' }} orientation="vertical" className="tw-w-full">
			<CarouselContent className="tw-mt-1 tw-h-[300px] tw-m-auto">
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={index} className="tw-pt-1 md:tw-basis-1/4">
						<div className="tw-p-1 tw-w-[120px] tw-h-[120px]">
							<Card className="tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center">
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
	)
}
export default VerticalCarousel
