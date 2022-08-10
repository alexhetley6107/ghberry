import React, { useEffect, useState } from 'react';
import { useDebounce } from '../hooks/debounce';
import { useSearchUsersQuery } from '../redux/github/github.api';

type Props = {};

function HomePage({}: Props) {
	const [search, setSearch] = useState('');
	const debounced = useDebounce(search);
	const { isLoading, isError, data } = useSearchUsersQuery('vladilen');

	useEffect(() => {
		console.log(search);
	}, [search]);

	return (
		<div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
			{isError && <p className='text-center text-3xl text-red-700'>Something went wrong...</p>}

			<div className='relative w-[560px] '>
				<input
					type='text'
					className='border py-2 px-4 w-full h-[42px] mb-2'
					placeholder='Search for Github username...'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<div className='absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, vero.
				</div>
			</div>
		</div>
	);
}

export default HomePage;
