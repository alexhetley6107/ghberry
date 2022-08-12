import React, { useState } from 'react';
import { useActions } from '../hooks/actions';
import { useAppSelector } from '../hooks/redux';
import { IRepo } from '../models/models';

function RepoCard({ repo }: { repo: IRepo }) {
	const { addFavorite, removeFavorite } = useActions();

	const { favorites } = useAppSelector((state) => state.github);

	const [isFav, setIsFav] = useState(favorites.includes(repo.html_url));

	const addToFavorites = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		addFavorite(repo.html_url);
		setIsFav(true);
	};

	const removeFromFavorites = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		removeFavorite(repo.html_url);
		setIsFav(false);
	};

	return (
		<div className='border overflow-hidden min-w-0 py-3 px-5 rounded mb-2 hover:shadow-md bg-white transition-all cursor-pointer'>
			<a href={repo.html_url} target='_blank'>
				<h2 className='text-lg overflow-hidden min-w-0 w-full font-bold '>{repo.full_name}</h2>
				<p className='text-sm font-bold '>
					Forks: <span className='font-bold mr-2'>{repo.forks}</span>
					Watchers: <span className='font-bold'>{repo.watchers}</span>
				</p>
				<p className='text-sm font-thin'>{repo?.description}</p>

				{isFav ? (
					<button
						className='py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all'
						onClick={removeFromFavorites}>
						Remove
					</button>
				) : (
					<button
						className='py-2 px-4 mr-2 bg-yellow-400 rounded hover:shadow-md transition-all'
						onClick={addToFavorites}>
						Add
					</button>
				)}
			</a>
		</div>
	);
}

export default RepoCard;
