import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

function Navigation({}: Props) {
	return (
		<nav className=' sm:flex flex-column sm:justify-between  sm:items-center py-1 px-5 shadow-md bg-blue-700 text-white text-center'>
			<h3 className='font-bold text-3xl py-1'>GitHuBerry Search</h3>

			<span className='text-2xl'>
				<Link to='/' className='mr-4'>
					Home
				</Link>
				<Link to='/favorites'>Favorites</Link>
			</span>
		</nav>
	);
}

export default Navigation;
