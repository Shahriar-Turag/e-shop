import Slider from 'react-slick';
import {
	bannerImg,
	sliderImgOne,
	sliderImgTwo,
	sliderImgThree,
	sliderImgFour,
} from '@/public/assets/images/images';
import Image from 'next/image';
import BannerText from './BannerText';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

function NextArrow(props: any) {
	const { onClick } = props;
	return (
		<div
			className='absolute bottom-12 left-6 w-10 h-10 border-[1px] shadow-md border-black text-black bg-white text-xl flex items-center justify-center rounded-full hover:bg-blue hover:border-transparent hover:text-white cursor-pointer duration-300 z-10'
			onClick={onClick}
		>
			<BsArrowLeft />
		</div>
	);
}

function PrevArrow(props: any) {
	const { onClick } = props;
	return (
		<div
			className='absolute bottom-12 right-6 w-10 h-10 border-[1px] shadow-md border-black text-black bg-white text-xl flex items-center justify-center rounded-full hover:bg-blue hover:border-transparent hover:text-white cursor-pointer duration-300 z-10'
			onClick={onClick}
		>
			<BsArrowRight />
		</div>
	);
}

const Banner = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	return (
		<div className='w-full bg-white px-4 py-6 font-titleFont flex gap-4 border-b-[1px]'>
			<div className='w-2/3 rounded-lg h-[410px] shadow-bannerShadow relative'>
				<Slider {...settings}>
					<div className='w-full h-[410px] relative'>
						<Image
							className='w-full h-full object-cover rounded-lg'
							src={sliderImgOne}
							alt='img 1'
							priority
						/>
						<BannerText
							className='absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-white'
							title='Spring fashion in bloom'
							description='New trends & styles to turn heads anytime, on any budget.'
							btnText='Shop now'
						/>
					</div>
					<div className='w-full h-[410px] relative'>
						<Image
							className='w-full h-full object-cover rounded-lg'
							src={sliderImgTwo}
							alt='img 1'
							priority
						/>
						<BannerText
							className='absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-black'
							title='Upto 65% off'
							description='New savings every week! Hurry and grab yours now.'
							btnText='Shop now'
						/>
					</div>
					<div className='w-full h-[410px] relative'>
						<Image
							className='w-full h-full object-cover rounded-lg'
							src={sliderImgThree}
							alt='img 1'
							priority
						/>
						<BannerText
							className='absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-blue'
							title=' You can save $1300+ a year'
							description='Start saving with free delivery walmart Reqards & more'
							btnText='Try free'
						/>
					</div>
					<div className='w-full h-[410px] relative'>
						<Image
							className='w-full h-full object-cover rounded-lg'
							src={sliderImgFour}
							alt='img 1'
							priority
						/>
						<BannerText
							className='absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-black'
							title='Upto 65% off'
							description='New savings every week! Hurry and grab yours now.'
							btnText='Shop now'
						/>
					</div>
				</Slider>
			</div>
			<div className='w-1/3 border-[1px] border-gray-200 rounded-lg shadow-bannerShadow p-4 flex flex-col justify-between'></div>
		</div>
	);
};

export default Banner;
