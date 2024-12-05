import Product from './Product'
import Purchase from './Purchase'
function Hero() {
	return (
		<div className="tw-flex tw-container tw-mx-auto">
			<div className="tw-w-2/3">
				<Product />
			</div>
			<div className="tw-w-1/3 tw-my-10 tw-pr-6 ">
				<Purchase />
			</div>
		</div>
	)
}
export default Hero
