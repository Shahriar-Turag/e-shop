import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
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
	}, []);

	console.log(router.query.image);

	return (
		<div className='w-full bg-white'>
			<div className='max-w-contentContainer mx-auto flex items-center py-4'>
				<div className='w-2/3 h-full flex items-center justify-center overflow-hidden relative'>
					<Image
						src={product.image}
						alt='product image'
						width={400}
						height={400}
						className='transform origin-top-left cursor-move duration-500'
					/>
				</div>
				<div className='w-1/3 h-full flex flex-col gap-2'>
					<p className='p-2 text-hoverBg text-sm font-semibold border border-gray-400 rounded-md'>
						500+ bought since yesterday
					</p>
					<div className='px-2 py-4 border border-gray-400 rounded-md flex flex-col gap-6'>
						<div>
							<div className='flex gap-2'>
								<button className='px-2 py-[1px] text-hoverBg text-sm border-[1px] border-hoverBg rounded-sm'>
									Best seller
								</button>
								<button className='px-2 py-[1px] text-red-600 text-sm border-[1px] border-red-600 rounded-sm'>
									Rollback
								</button>
							</div>
							<IoMdHeartEmpty />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
