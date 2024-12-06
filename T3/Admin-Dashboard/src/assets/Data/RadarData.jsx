export const RadarData = [
	{
		category: 'Sales Performance',
		Revenue: 85.5, // Total sales performance rating
		Growth: 78.2, // Growth percentage rating
		rating: ((85.5 + 78.2) / 2).toFixed(1), // Average of Revenue and Growth
	},
	{
		category: 'Customer Demographics',
		Percentage: 88.4, // Largest segment rating
		Diversity: 72.9, // Diversity score rating
		rating: ((88.4 + 72.9) / 2).toFixed(1), // Average of Percentage and Diversity
	},
	{
		category: 'Marketing Channels',
		Effectiveness: 69.7, // Conversion rate effectiveness rating
		Reach: 81.3, // Overall audience reach rating
		rating: ((69.7 + 81.3) / 2).toFixed(1), // Average of Effectiveness and Reach
	},
	{
		category: 'Product Ratings',
		Quality: 92.3, // Average rating for product quality
		Features: 74.5, // Average rating for product features
		rating: ((92.3 + 74.5) / 2).toFixed(1), // Average of Quality and Features
	},
	{
		category: 'Inventory Levels',
		Electronics: 65.4, // Inventory level rating for electronics
		Clothing: 78.8, // Inventory level rating for clothing
		rating: ((65.4 + 78.8) / 2).toFixed(1), // Average of Electronics and Clothing
	},
	{
		category: 'Profit Margins',
		Electronics: 81.6, // Profit margin rating for electronics
		Clothing: 90.2, // Profit margin rating for clothing
		rating: ((81.6 + 90.2) / 2).toFixed(1), // Average of Electronics and Clothing
	},
]

export default RadarData
