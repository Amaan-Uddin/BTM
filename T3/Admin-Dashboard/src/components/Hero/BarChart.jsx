import { ResponsiveContainer, BarChart, Bar, Tooltip } from 'recharts'
import { AnalyticData } from '@/assets/Data/AnalyticData'

function TotalProfitsBarChart({ name, fill = '#8884d8', datakey = 'revenue' }) {
	return (
		<div className="w-full h-full flex flex-col gap-4">
			<h1 className="text-3xl font-extrabold text-secondary pb-4 tracking-tight">{name}</h1>
			<div className="w-full h-[150px]">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={AnalyticData}>
						<Tooltip
							contentStyle={{ background: 'white' }}
							labelStyle={{ display: 'none' }}
							cursor={{ fill: 'none' }}
						/>
						<Bar dataKey={datakey} fill={fill} />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
export default TotalProfitsBarChart
