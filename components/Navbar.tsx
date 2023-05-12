import Image from 'next/image';
import React from 'react';
import { logo } from '../public/assets/images/images/index';
import { AiFillDatabase, AiOutlineUser, AiOutlineHeart } from 'react-icons/ai';
import { HiAdjustments } from 'react-icons/hi';
import { IoSearchOutline } from 'react-icons/io5';
import { BsCart2 } from 'react-icons/bs';
import NavbarBottom from './NavbarBottom';

function Navbar() {
	return (
		<div className='width-full bg-blue text-white'>
			<div className='max-w-container mx-auto h-20 px-4 flex justify-between items-center gap-2'>
				{/* logo */}
				<div className='navbarHover'>
					<Image className='w-44' alt='logo' src={logo} />
				</div>
				{/* department */}
				<div className='navbarHover'>
					<div>
						<span>
							<AiFillDatabase />
						</span>
					</div>
					<p className='text-base font-semibold'>Departments</p>
				</div>
				{/* services */}
				<div className='navbarHover'>
					<div>
						<span>
							<HiAdjustments />
						</span>
					</div>
					<p className='text-base font-semibold'>Services</p>
				</div>
				{/* search box */}
				<div className='h-10 flex flex-1 relative'>
					<input
						type='text'
						placeholder='Search for products'
						className='h-full w-full rounded-full px-4 text-black text-base outline-none border-[1px] border-transparent focus-visible:border-black duration-200'
					/>
					<span className='absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-yellow text-black text-xl'>
						<IoSearchOutline />
					</span>
				</div>
				{/* my items */}
				<div className='navbarHover '>
					<AiOutlineHeart />
					<div>
						<p className='text-xs'>Reorder</p>
						<h2 className='text-base font-semibold -mt-1'>
							My Items
						</h2>
					</div>
				</div>
				{/* Accounts */}
				<div className='navbarHover '>
					<AiOutlineUser />
					<div>
						<p className='text-xs'>Sign In</p>
						<h2 className='text-base font-semibold -mt-1'>
							Account
						</h2>
					</div>
				</div>
				{/* cart */}
				<div className='flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-hoverBg duration-300 relative'>
					<BsCart2 className='text-2xl' />
					<p className='text-[10px] -mt-2'>$0.00</p>
					<span className='absolute w-4 h-4 bg-yellow text-black top-0 right-4 rounded-full flex items-center justify-center font-bodyFont text-xs'>
						0
					</span>
				</div>
			</div>
			<hr />
			<NavbarBottom />
		</div>
	);
}

export default Navbar;