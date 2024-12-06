import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Clients } from '@/assets/Data/TopSalesData'
import Profile from '@/components/utils/Profile'
function TopClients() {
	return (
		<>
			<h1 className="text-3xl font-extrabold text-secondary pb-4 tracking-tight">Top Clients</h1>
			<Table>
				<TableCaption className="text-base">A list of your recent top sales.</TableCaption>
				<TableBody>
					{Clients.map((client) => (
						<>
							<TableRow className="hover:bg-blue-50 border-b border-b-gray-200" key={client.id}>
								<TableCell className="flex items-center gap-4 font-medium">
									<Profile src={client.profile} />
									<div className="flex flex-col">
										<span className="font-normal">{client.name}</span>
										<span className="font-semibold text-xs">{client.email}</span>
									</div>
								</TableCell>
								<TableCell className="font-bold tracking-tighter pr-4 text-right">
									$ {client.amount}
								</TableCell>
							</TableRow>
						</>
					))}
				</TableBody>
			</Table>
		</>
	)
}
export default TopClients
