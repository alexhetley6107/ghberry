import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import FavoritesPage from './pages/FavoritesPage';
import HomePage from './pages/HomePage';

function App() {
	return (
		<div className='flex-column  bg-gray-200  mx-auto min-h-screen w-full pb-3 '>
			<Navigation />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/favorites' element={<FavoritesPage />} />
			</Routes>
		</div>
	);
}

export default App;
