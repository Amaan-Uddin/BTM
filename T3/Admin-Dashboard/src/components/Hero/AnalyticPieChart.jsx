import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { PieData } from '@/assets/Data/PieData'

function AnalyticPieChart() {
	return (
		<div className="w-full h-full flex flex-col gap-2">
			<h1 className="text-3xl font-extrabold text-secondary pb-4 tracking-tight">Sales Category</h1>
			<div className="w-full h-[300px]">
				<ResponsiveContainer width="100%" height="100%">
					<PieChart>
						<Tooltip contentStyle={{ background: 'white' }} />
						<Pie
							data={PieData}
							innerRadius={'70%'}
							outerRadius={'90%'}
							fill="#8884d8"
							paddingAngle={4}
							dataKey="revenue"
						>
							{PieData.map((entry) => (
								<Cell key={entry.name} fill={entry.color} />
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
export default AnalyticPieChart
