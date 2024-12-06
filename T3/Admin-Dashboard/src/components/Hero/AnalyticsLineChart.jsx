import { ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, Area } from 'recharts'
import { AnalyticData } from '@/assets/Data/AnalyticData'

function AnalyticsLineChart() {
	return (
		<div className="w-full h-full flex flex-col gap-4">
			<h1 className="text-3xl font-extrabold text-secondary pb-4 tracking-tight">Analytics</h1>
			<div className="w-full h-[300px]">
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart data={AnalyticData}>
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Area type="monotone" dataKey="visitors" stackId="1" stroke="#8884d8" fill="#8884d8" />
						<Area type="monotone" dataKey="orders" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
						<Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
export default AnalyticsLineChart
