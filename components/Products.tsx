import { Item } from '@/type';
import Image from 'next/image';
import { GoPlus } from 'react-icons/go';

const Products = ({ productData }: any) => {
	return (
		<div className='py-6 px-4 grid grid-cols-4 gap-4'>
			{productData.map((item: Item) => (
				<div
					key={item._id}
					className='border-[1px] border-gray-200 mb-6 group   '
				>
					<div className='w-full h-[350px] overflow-hidden p-1'>
						<Image
							className='object-cover group-hover:scale-110 transition '
							width={300}
							height={300}
							src={item.image}
							alt='item image'
						/>
					</div>
					{/* description */}
					<div className='px-2 py-4 flex flex-col justify-center'>
						<div className='flex justify-between items-center py-2'>
							<button className='w-20 h-9 bg-blue text-white rounded-full flex gap-1 items-center justify-center hover:bg-[#004f9a] duration-300'>
								<span>
									<GoPlus />
								</span>
								Add
							</button>
							<button className='w-20 h-9 bg-white text-black hover:text-white border border-black hover:border-none rounded-full flex gap-1 items-center justify-center hover:bg-blue duration-300'>
								<span>
									<GoPlus />
								</span>
								Details
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Products;
