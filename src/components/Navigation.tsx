import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

function Navigation({}: Props) {
	return (
		<nav className='flex justify-between items-center h-[60px] px-5 shadow-md bg-gray-700 text-white'>
			<h3 className='font-bold text-3xl'>GitHuBerry Search</h3>

			<span className='text-2xl'>
				<Link to='/' className='mr-2'>
					Home
				</Link>
				<Link to='/favorites'>Favorites</Link>
			</span>
		</nav>
	);
}

export default Navigation;
