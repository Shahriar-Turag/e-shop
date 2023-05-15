import '@/styles/globals.css';
import 'slick-carousel/slick/slick.css';
import type { AppProps } from 'next/app';
import { Open_Sans } from 'next/font/google';
import Layout from '@/app/components/Layout';
import { Provider } from 'react-redux';
import { store, persistor } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';

const open_sans = Open_Sans({
	subsets: ['latin'],
	variable: '--font-open_sans',
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<PersistGate loading='loading' persistor={persistor}>
				<main className={`${open_sans.variable} font-sans`}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
					<Toaster
						reverseOrder={false}
						position='top-center'
						toastOptions={{
							style: {
								borderRadius: '8px',
								background: '#333',
								color: '#fff',
							},
						}}
					/>
				</main>
			</PersistGate>
		</Provider>
	);
}
