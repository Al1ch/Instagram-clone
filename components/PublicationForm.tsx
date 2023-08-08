'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { createPublication } from '@/app/_action';

type Props = {
	image: string;
	authorId?: number;
};

const PublicationForm = ({ authorId, image }: Props) => {
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const pathName = usePathname();
	const formRef = useRef<HTMLFormElement>(null);

	useEffect(() => {
		adjustTextAreaHeight();
	}, [textAreaRef]);

	const adjustTextAreaHeight = () => {
		const textArea = textAreaRef.current;
		if (textArea) {
			textArea.style.height = 'auto'; // Réinitialise la hauteur à la valeur par défaut pour recalculer la hauteur réelle.
			textArea.style.height = textArea.scrollHeight + 'px'; // Ajuste la hauteur en fonction du contenu réel.
		}
	};

	const handlePublicationCreation = async (data: FormData) => {
		const content = data.get('content');
		await createPublication(content as string, authorId || 1, pathName);
		formRef.current?.reset();
	};

	return (
		<form
			ref={formRef}
			action={handlePublicationCreation}
			className="flex flex-col p-6 text-slate-50 bg-[#1b2936]"
		>
			<div className="flex items-center  justify-center gap-2">
				<Image
					className="object-cover w-8 h-8 rounded-full self-start"
					width="200"
					height="300"
					src={image}
					alt=""
				/>
				<textarea
					name="content"
					ref={textAreaRef}
					className="border-none outline-0 bg-transparent w-full resize-none"
					placeholder="What's Happening ? "
				/>
			</div>
			<button
				className="self-end bg-[#1e9ae7] flex items-center justify-center px-4 py-1 rounded-xl"
				type="submit"
			>
				Submit
			</button>
		</form>
	);
};

export default PublicationForm;
