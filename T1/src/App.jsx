import { Routes, Route } from 'react-router'
import MainLayout from './components/layout/MainLayout'
import Home from './components/main/Home'
import About from './components/main/About'
import Categories from './components/main/Categories'
import Register from './components/main/Register'
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="categories" element={<Categories />} />
					<Route path="register" element={<Register />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
