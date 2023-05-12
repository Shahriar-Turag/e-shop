import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import { Product } from '@/type';
import Products from '@/components/Products';

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
				<Navbar />
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
