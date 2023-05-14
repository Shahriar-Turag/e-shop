import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	emptyCart,
	phoneImg,
	ship1Img,
	ship2Img,
	ship3Img,
	warningImg,
} from '@/public/assets/images/images';
import Image from 'next/image';
import { StoreProduct } from '@/type';
import { TbReload } from 'react-icons/tb';
import { MdOutlineAdd } from 'react-icons/md';
import { HiMinusSm } from 'react-icons/hi';

const CartPage = () => {
	const productData = useSelector((state: any) => state.productData);

	return (
		<div className='w-full py-10'>
			<div className='w-full flex gap-10'>
				<div className='w-2/3 flex flex-col gap-5'>
					<h1>
						Cart{' '}
						<span className='text-light font-normal'>
							({productData.length}) items
						</span>
					</h1>
					{/* pickup details */}
					<div>
						<div className='text-xl font-bold flex items-center gap-2 mb-2'>
							<Image
								className='w-10'
								src={phoneImg}
								alt='phone image'
							/>
							<p>Pickup and delivery options</p>
						</div>
						<div className='w-full grid grid-cols-3 gap-4 text-xs pb-4'>
							<div className='w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2'>
								<Image
									className='w-10'
									src={ship1Img}
									alt='ship image'
								/>
								<p className='font-bold'>Shipping</p>
								<p>All items available</p>
							</div>
							<div className='w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2'>
								<Image
									className='w-10'
									src={ship2Img}
									alt='ship image'
								/>
								<p className='font-bold'>Pickup</p>
								<p>All items available</p>
							</div>
							<div className='w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2'>
								<Image
									className='w-10'
									src={ship3Img}
									alt='ship image'
								/>
								<p className='font-bold'>Delivery</p>
								<p>All items available</p>
							</div>
						</div>
						{/* Cart products */}
						<div className='w-full p-5 border-[1px] border-zinc-400 rounded-md flex flex-col gap-4'>
							<p className='font-semibold text-sm text-zinc-500'>
								Sold and shipped by{' '}
								<span className='text-black font-semibold'>
									e-shop.com
								</span>
							</p>
							<div className='flex gap-2'>
								<button className='px-2 py-[1px] text-hoverBg text-sm border-[1px] border-hoverBg rounded-sm'>
									Best seller
								</button>
								<button className='px-2 py-[1px] text-red-600 text-sm border-[1px] border-red-600 rounded-sm'>
									Rollback
								</button>
							</div>
							{/* Items */}
							<div>
								{productData.map((item: StoreProduct) => (
									<div
										key={item._id}
										className='flex items-center justify-between gap-4 border-b-[1px] border-b-zinc-200'
									>
										<div className='w-3/4 flex items-center gap-2 py-4'>
											<Image
												className='w-36'
												width={500}
												height={500}
												src={item.image}
												alt='productImg'
											/>
											<div>
												<h2 className='text-base text-zinc-900'>
													{item.title}
												</h2>
												<p className='text-sm text-zinc-500'>
													{item.description}
												</p>
												<p className='text-sm text-zinc-500'>
													price: ${item.price}
												</p>
												<p className='text-sm text-zinc-500 flex items-center gap-1'>
													<span className='bg-blue rounded-full text-white text-xs w-4 h-4 flex items-center justify-center'>
														<TbReload className='rotate-180' />
													</span>
													Free 30 days returns
												</p>
												{/* buttons */}
												<div className='mt-2 flex items-center gap-4'>
													<button className='text-sm underline underline-offset-2 decoration-[1px] text-zinc-600 hover:no-underline hover:text-blue duration-300'>
														Remove
													</button>
													<div className='w-28 h-9 border border-zinc-400 rounded-full text-base font-semibold text-black flex items-center justify-between px-3'>
														<button className='text-base w-5 h-5 text-zinc-600 hover:bg-[#74767c] hover:text-white rounded-full flex items-center justify-center cursor-pointer duration-200'>
															<HiMinusSm />
														</button>
														<span>
															{item.quantity}
														</span>
														<button className='text-lg w-5 h-5 text-zinc-600 hover:bg-[#74767c] hover:text-white rounded-full flex items-center justify-center cursor-pointer duration-200'>
															<MdOutlineAdd />
														</button>
													</div>
												</div>
											</div>
										</div>
										<div className=''></div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className='w-1/3 p-4 mt-24 h-[500px] border-[1px] border-zinc-400 rounded-md flex flex-col justify-center gap-4'></div>
			</div>
		</div>
	);
};

export default CartPage;
