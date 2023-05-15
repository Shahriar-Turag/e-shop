import Head from 'next/head';
import Banner from '@/app/components/Banner';
import { Product } from '@/app/types/type';
import Products from '@/app/components/Products';

interface Props {
	productData: Product;
}

export default function Home({ productData }: Props) {
	return (
		<>
			<Head>
				<title>e-shop</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/smallLogo.ico' />
			</Head>
			<main className='bg-lightBlue'>
				<div className='max-w-contentContainer mx-auto bg-white'>
					<Banner />
					<Products productData={productData} />
				</div>
			</main>
		</>
	);
}

// SSR data fetching

export const getServerSideProps = async () => {
	const productData = await await (
		await fetch('http://localhost:3000/api/productdata')
	).json();

	return {
		props: { productData },
	};
};
