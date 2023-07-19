import SideBar from '@/components/SideBar';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
	return (
		<section>
			<div className="flex flex-row  w-screen ">
				<SideBar />
				{children}
			</div>
		</section>
	);
}
