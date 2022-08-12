import React from 'react';
import { useAppSelector } from '../hooks/redux';

type Props = {};

function FavoritesPage({}: Props) {
	const { favorites } = useAppSelector((state) => state.github);

	if (favorites.length === 0) return <p className='text-center'>No Items.</p>;

	return (
		<div className='flex justify-center pt-10 mx-auto'>
			<ul className='list-none overflow-hidden'>
				{favorites.map((f) => (
					<li className='p-2 bg-white m-2 overflow-hidden min-w-0' key={f}>
						<a className='block w-full ' href={f} target='_blank'>
							{f}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default FavoritesPage;
