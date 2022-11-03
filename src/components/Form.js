import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

function Form() {
	const [data, setData] = useState([]);
	const [search, setSearch] = useState('war');
	const [sortGoodBad, setSortGoodBad] = useState('goodToBad');

	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=en-US`
			)
			.then((res) => setData(res.data.results))
			.catch((err) => console.log(err.message));
	}, [search]);

	return (
		<div className='form-component'>
			<div className='form-container'>
				<form>
					<input
						type='text'
						placeholder='Type a title'
						id='search-input'
						onChange={(e) => setSearch(e.target.value)}
					/>
					<input type='submit' value='search' />
				</form>
				<div className='btn-sort-container'>
					<div
						className='btn-sort'
						id='goodToBad'
						onClick={() => setSortGoodBad('goodToBad')}
					>
						Top<span>⏪</span>
					</div>
					<div
						className='btn-sort'
						id='badToGood'
						onClick={() => setSortGoodBad('badToGood')}
					>
						Bad<span>⏪</span>
					</div>
				</div>
			</div>
			<div className='result'>
				{data
					.slice(0, 12)
					// eslint-disable-next-line array-callback-return
					.sort((a, b) => {
						if (sortGoodBad === 'goodToBad') {
							return b.vote_average - a.vote_average;
						} else if (sortGoodBad === 'badToGood') {
							return a.vote_average - b.vote_average;
						}
					})
					.map((movie) => (
						<Card movie={movie} key={movie.id} />
					))}
			</div>
		</div>
	);
}

export default Form;
