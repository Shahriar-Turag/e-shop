import { ReactElement } from 'react';
import Footer from './Footer';
import Modal from './modals/Modal';
import Navbar from './Navbar';
import TopFooter from './TopFooter';

interface Props {
	children: ReactElement;
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<Navbar />
			<Modal
				isOpen
				actionLabel='Submit'
				title='Hey'
				secondaryActionLabel='d'
				onClose={() => {}}
				onSubmit={() => {}}
			/>
			<main>{children}</main>
			<TopFooter />
			<Footer />
		</>
	);
};

export default Layout;
