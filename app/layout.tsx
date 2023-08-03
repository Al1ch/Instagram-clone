import './globals.css';
import SideSection from '@/components/SideSection';

export const metadata = {
	title: 'Social Media App',
	description: 'Generated by create next app',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<div className="flex flex-row min-h-screen min-w-screen  bg-black overflow-hidden">
					<SideSection />
					{children}
				</div>
			</body>
		</html>
	);
}
