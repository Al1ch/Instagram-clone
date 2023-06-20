import Image from 'next/image';
import SideBar from '../components/SideBar';

export default function Home() {
	return (
		<>
			<div className="flex  flex-row h-screen w-screen ">
				<SideBar />
				<div className="h-full w-full bg-black"></div>
			</div>
		</>
	);
}
