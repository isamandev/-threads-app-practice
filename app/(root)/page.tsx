import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Home() {
	return (
		<main>
			<div className='relative flex gap-3'>
				<SignedIn>
					<UserButton />
				</SignedIn>
				<SignedOut>
					<SignInButton>
						<button className='px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold'>
							Sign in
						</button>
					</SignInButton>
				</SignedOut>
			</div>
		</main>
	);
}
