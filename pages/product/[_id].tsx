import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { BsInfoCircle, BsStarFill } from 'react-icons/bs';
import { IoMdHeartEmpty } from 'react-icons/io';

const ProductDetails = () => {
	const router = useRouter();

	const [product, setProduct] = useState<any>({});
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		setLoading(true);
		if (router.query.image) {
			setProduct(router.query);
		}
		setLoading(false);
	}, [ router ]);

	return (
		<div className='w-full bg-white'>
			<div className='max-w-contentContainer mx-auto flex items-center py-4'>
				<div className='w-2/3 h-full flex items-center justify-center overflow-hidden relative'>
					<Image
						src={product.image}
						alt='product image'
						width={400}
						height={400}
						className='transform origin-top-left  cursor-move duration-500'
					/>
				</div>
				<div className='w-1/3 h-full flex flex-col gap-2'>
					<p className='p-2 text-hoverBg text-sm font-semibold border border-gray-400 rounded-md'>
						500+ bought since yesterday
					</p>
					<div className='px-2 py-4 border border-gray-400 rounded-md flex flex-col gap-6'>
						<div className='flex justify-between items-center'>
							<div className='flex gap-2'>
								<button className='px-2 py-[1px] text-hoverBg text-sm border-[1px] border-hoverBg rounded-sm'>
									Best seller
								</button>
								<button className='px-2 py-[1px] text-red-600 text-sm border-[1px] border-red-600 rounded-sm'>
									Rollback
								</button>
							</div>
							<IoMdHeartEmpty  className='text-gray-600 text-2xl'/>
						</div>
						{/* product info */}
							<div className='flex flex-col gap-1'>
								<p className='text-sm underline underline-offset-4'>{product.brand}</p>
								<p className='text-xl font-semibold text-black'>
								{product.title}
							</p>
							<p className='text-base text-zinc-500'>{product.description}</p>
							<div className='flex gap-2 items-center text-xs mt-2'>
								<div className='flex items-center gap-1'>
									<BsStarFill/>
									<BsStarFill/>
									<BsStarFill/>
									<BsStarFill/>
									<BsStarFill/>
								</div>
								<p>25</p>
							</div>
							<div className='flex items-end gap-2'>
								<p className='font-semibold text-2xl text-[#2a8703]'>Now ${product.price}</p>
								<p className='text-sm text-zinc-500 line-through flex items-center gap-1'>{product.oldPrice} <span><BsInfoCircle/></span></p>
							</div>
					</div>
					{/* online info */}
					<div>
						<p>
							<span className='font-semibold'>$18/month</span>
							<span className='font-bold'>WithAffirm</span><span className='underline underline-offset-2'>Learn how</span>
						</p>
						<p className='text-xs text-zinc-500 flex items-center gap-14'>
							Price when purchased online
							<span>
								<BsInfoCircle/>
							</span>
						</p>
					</div>
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
