// export type SafeListing = Omit<Listing, 'createdAt'> & {
// 	createdAt: string;
// };

import { User } from 'next-auth';

export type SafeUser = Omit<
	User,
	'createdAt' | 'updatedAt' | 'emailVerified'
> & {
	createdAt: string;
	updatedAt: string;
	emailVerified: string | null;
};
