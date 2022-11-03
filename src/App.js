import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/favorites' element={<Favorites />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
