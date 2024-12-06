import TopClients from './TopClients'
import AnalyticsLineChart from './AnalyticsLineChart'
import BarChart from './BarChart'
import AnalyticPieChart from './AnalyticPieChart'
import AnalyticRadarChart from './AnalyticRadarChart'
import HeroCards from './HeroCards'
import './herocard.css'
function Hero() {
	return (
		<div className="grid gap-[20px] grid-cols-4 auto-rows-[minmax(180px,auto)]">
			<div className="py-[15px] px-[20px] rounded-[5px] border border-1 border-gray-200 shadow-sm col-span-2 row-span-2">
				<AnalyticsLineChart />
			</div>

			<div className="p-[20px] rounded-[5px] border border-1 border-gray-200 shadow-sm herocard1">
				<HeroCards title={'Loss'} number={'35'} direction="down" />
			</div>
			<div className="p-[20px] rounded-[5px] border border-1 border-gray-200 shadow-sm col-span-1 row-span-2">
				<AnalyticPieChart />
			</div>
			<div className="p-[20px] rounded-[5px] border border-1 border-gray-200 shadow-sm herocard2">
				<HeroCards title={'Profit'} number={'65'} direction="up" />
			</div>

			<div className="p-[20px] rounded-[5px] border border-1 border-gray-200 shadow-sm col-span-2 row-span-1">
				<TopClients />
			</div>
			<div className="p-[20px] rounded-[5px] border border-1 border-gray-200 shadow-sm col-span-2 row-span-1">
				<AnalyticRadarChart />
			</div>
			<div className="p-[20px] rounded-[5px] border border-1 border-gray-200 shadow-sm col-span-2 row-span-1">
				<BarChart name={'Daily Revenue'} />
			</div>
			<div className="p-[20px] rounded-[5px] border border-1 border-gray-200 shadow-sm col-span-2 row-span-1">
				<BarChart name={'Daily Visitors'} fill="#FF7800" datakey="visitors" />
			</div>
		</div>
	)
}
export default Hero
