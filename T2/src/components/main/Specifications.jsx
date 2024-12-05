import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

const tableData = [
	{ key: 'Storage/Tankless', value: 'Storage' },
	{ key: 'Type', value: 'Heat Pump Water Heaters' },
	{ key: 'Application', value: 'Outdoor, Hotel, Household, Commercial' },
	{ key: 'Power Source', value: 'Electric' },
	{ key: 'App-Controlled', value: 'Yes' },
	{ key: 'Voltage (V)', value: '220' },
	{ key: 'After-sales Service Provided', value: 'Overseas Call Centers' },
	{ key: 'Warranty', value: '3 years' },
	{ key: 'Capacity', value: '200/300L' },
	{ key: 'Installation', value: 'Freestanding' },
	{ key: 'Private Mold', value: 'NO' },
	{ key: 'Place of Origin', value: 'Guangdong, China' },
	{ key: 'Brand Name', value: 'Gree' },
	{ key: 'Model Number', value: 'GRS-S3.5PdG/NaA1-K' },
	{ key: 'Housing Material', value: 'Plastic' },
	{ key: 'Refrigerant', value: 'R410a' },
	{ key: 'Function', value: 'Water Heating' },
	{ key: 'Power supply', value: '220-240V~50Hz' },
	{ key: 'Compressor', value: 'Famous Brand Rotary Compressor' },
	{ key: 'Heating capacity', value: '3500 W' },
	{ key: 'Brand', value: 'Puremind' },
	{ key: 'Feature', value: 'Energy Saving' },
	{ key: 'Certification', value: 'ce' },
	{ key: 'Type', value: 'Air Source Heat Pump' },
	{ key: 'Use', value: 'Swimming Pool Heater' },
	{ key: 'Packaging Details', value: 'carton+wooden case' },
	{ key: 'Port', value: 'Hongwan port' },
	{ key: 'Selling Units', value: 'Single item' },
	{ key: 'Single package size', value: '109X47X96 cm' },
	{ key: 'Single gross weight', value: '68.000 kg' },
	{ key: 'Supply Ability', value: '10000 Set/Sets per Year' },
]

function Specifications() {
	return (
		<div>
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1" className="tw-my-4">
					<AccordionTrigger>
						<h1 className="tw-font-bold tw-text-xl">Key Attributes</h1>
					</AccordionTrigger>
					<AccordionContent>
						<Table className="tw-border tw-border-gray-300">
							<TableBody>
								{tableData.map((row, index) => (
									<TableRow key={index}>
										<TableCell className="font-medium tw-w-1/4 tw-bg-gray-200">{row.key}</TableCell>
										<TableCell className="tw-w-1/4">{row.value}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2" className="tw-my-4">
					<AccordionTrigger>
						<h1 className="tw-font-bold tw-text-xl">Lead Time</h1>
					</AccordionTrigger>
					<AccordionContent>
						<Table className="tw-border tw-border-gray-300">
							<TableBody>
								<TableRow>
									<TableCell className="font-medium tw-w-1/4 tw-bg-gray-200">Quantity</TableCell>
									<TableCell className="tw-w-1/4 tw-border">1 - 2</TableCell>
									<TableCell className="tw-w-1/4 tw-border">3 - 40</TableCell>
									<TableCell className="tw-w-1/4 tw-border"> &gt;40 </TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium tw-w-1/4 tw-bg-gray-200">Lead Time</TableCell>
									<TableCell className="tw-w-1/4 tw-border">25</TableCell>
									<TableCell className="tw-w-1/4 tw-border">35</TableCell>
									<TableCell className="tw-w-1/4 tw-border"> negotiation </TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}
export default Specifications
