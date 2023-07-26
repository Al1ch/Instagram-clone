import Image from 'next/image';
import SideBar from '@/components/SideBar';
export default function Home() {
	return (
		<>
			<div className="flex flex-row min-h-screen w-screen ">
				<SideBar />
				<div className="h-screen w-screen bg-black"></div>
			</div>
		</>
	);
}
