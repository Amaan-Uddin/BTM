// import Up from '../../assets/SVG/up.svg'
// import Down from '../../assets/SVG/down.svg'
function HeroCards({ title, number, direction = 'up' }) {
	// const src = direction === 'up' ? Up : Down
	return (
		<div className="w-full h-full">
			<h1 className="text-4xl font-extrabold text-secondary pb-4 tracking-tight">{title}</h1>
			<div className="flex items-baseline justify-end w-full font-extrabold text-main">
				{/* <span className="w-4 h-3">
					<img src={src} alt="arrow" className="size-8" />
				</span> */}
				<span className="text-7xl">{number}</span>
				<span className="text-3xl">%</span>
			</div>
		</div>
	)
}
export default HeroCards
