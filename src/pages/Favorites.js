import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Card from '../components/Card';

function Favorites() {
	const [listData, setListData] = useState([]);

	useEffect(() => {
		let moviesId = window.localStorage.movies
			? window.localStorage.movies.split(',')
			: [];

		for (let i = 0; i < moviesId.length; i++) {
			axios
				.get(
					`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR`
				)
				.then((res) => setListData((listData) => [...listData, res.data]));
		}
	}, []);

	return (
		<div className='user-list-page'>
			<Header />
			<h2>
				Favorites <span>🧡</span>
			</h2>
			<div className='results'>
				{listData.length > 0 ? (
					listData.map((movie) => <Card movie={movie} key={movie.id} />)
				) : (
					<h2>No favorites yet</h2>
				)}
			</div>
		</div>
	);
}

export default Favorites;
