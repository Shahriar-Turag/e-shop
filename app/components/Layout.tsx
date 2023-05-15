import React, { useEffect, useState } from 'react';
import getCurrentUser from '../actions/getCurrentUsers';
import ClientOnly from './ClientOnly';
import Footer from './Footer';
import LoginModal from './modals/LoginModal';
import Modal from './modals/Modal';
import RegisterModal from './modals/RegisterModal';
import Navbar from './navbar/Navbar';
import TopFooter from './TopFooter';

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const fetchCurrentUser = async () => {
			const user = await getCurrentUser();
			setCurrentUser(user);
		};

		fetchCurrentUser();
	}, []);

	return (
		<>
			<ClientOnly>
				<Navbar currentUser={currentUser} />
				<LoginModal />
				<RegisterModal />
				<main>{children}</main>
				<TopFooter />
				<Footer />
			</ClientOnly>
		</>
	);
};

export default Layout;
