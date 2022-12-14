import React, { useEffect, useState } from 'react';
import RepoCard from '../components/RepoCard';
import { useDebounce } from '../hooks/debounce';
import { useLazyGetUserReposQuery, useSearchUsersQuery } from '../redux/github/github.api';

type Props = {};

function HomePage({}: Props) {
	const [search, setSearch] = useState('');
	const [dropdown, setDropdown] = useState(false);
	const debounced = useDebounce(search);
	const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
		skip: debounced.length < 3,
		refetchOnFocus: true,
	});
	const [fetchRepos, { isLoading: areReposLoading, data: repos }] = useLazyGetUserReposQuery();

	useEffect(() => {
		setDropdown(debounced.length > 3 && data?.length! > 0);
	}, [debounced, data]);

	const handleClick = (userName: string) => {
		fetchRepos(userName);
		setDropdown(false);
	};

	return (
		<div className='flex justify-center pt-10  items-center'>
			{isError && (
				<p className='text-center text-3xl text-red-700 w-full'>Something went wrong...</p>
			)}

			<div className='relative w-[560px] px-2'>
				<input
					type='text'
					className='border py-3 px-4 w-full h-[42px] mb-4 rounded-md'
					placeholder='Search for Github username...'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				{dropdown && (
					<ul className='list-none overflow-y-scroll absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white'>
						{isLoading && <p className='text-center'>Loading...</p>}
						{data?.map((user) => (
							<li
								key={user.id}
								onClick={() => handleClick(user.login)}
								className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'>
								{user.login}
							</li>
						))}
					</ul>
				)}

				<div className='w-full overflow-hidden'>
					{areReposLoading && <p className='text-center'>Repos are loading...</p>}

					{repos?.map((repo) => (
						<RepoCard repo={repo} key={repo.id} />
					))}
				</div>
			</div>
		</div>
	);
}

export default HomePage;
