import SideBar from '@/components/SideBar';
export default function ProfileLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="flex flex-row min-h-screen min-w-screen items-center w-full">
			{children}
		</section>
	);
}
