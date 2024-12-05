import { Routes, Route } from 'react-router'
import MainLayout from './components/layout/MainLayout'
import Hero from './components/main/Hero'
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Hero />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
