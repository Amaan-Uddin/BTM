import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import { RadarData } from '@/assets/Data/RadarData'

function AnalyticRadarChart() {
	return (
		<div className="w-full h-full flex flex-col gap-2">
			<h1 className="text-3xl font-extrabold text-secondary pb-4 tracking-tight">Performance Overview</h1>
			<div className="w-full h-[300px]">
				<ResponsiveContainer width="100%" height="100%">
					<RadarChart cx="50%" cy="50%" outerRadius="80%" data={RadarData}>
						<PolarGrid />
						<PolarAngleAxis dataKey="category" />
						<PolarRadiusAxis />
						<Radar
							name="Performance Overview"
							dataKey="rating"
							stroke="#8884d8"
							fill="#8884d8"
							fillOpacity={0.6}
						/>
					</RadarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
export default AnalyticRadarChart
