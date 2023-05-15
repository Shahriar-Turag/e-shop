import { ReactElement } from 'react';
import Footer from './Footer';
import Modal from './modals/Modal';
import RegisterModal from './modals/RegisterModal';
import Navbar from './navbar/Navbar';
import TopFooter from './TopFooter';

interface Props {
	children: ReactElement;
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<Navbar />
			<RegisterModal />
			<main>{children}</main>
			<TopFooter />
			<Footer />
		</>
	);
};

export default Layout;
