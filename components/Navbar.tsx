import Image from 'next/image';
import React from 'react';
import { logo } from '../public/assets/images/images/index';
import { AiFillDatabase } from 'react-icons/ai';
import { HiAdjustments } from 'react-icons/hi';

function Navbar() {
	return (
		<div className='width-full bg-blue text-white'>
			<div className='max-w-container mx-auto h-20 px-4 flex items-center gap-2'>
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
				</div>
			</div>
		</div>
	);
}

export default Navbar;
