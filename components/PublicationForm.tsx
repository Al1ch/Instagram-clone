'use client';
import React, { useState, useEffect, useRef, RefObject } from 'react';
import Image from 'next/image';
import { Post, User } from '@/models.types';
import axios from 'axios';

type Props = {
	image: string;
	authorId?: number;
	onSubmit: () => void;
};

const PublicationForm = ({ onSubmit, authorId }: Props) => {
	const [content, setContent] = useState('');
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

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

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		adjustTextAreaHeight();
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault(); // tu enleve le comportement par defaut de ton post
		try {
			const res = await axios.post('/api/posts', {
				body: {
					content,
					authorId,
				},
			});
			setContent('');

			onSubmit();
		} catch (err) {
			console.log('okkkkkkk');
		}
	};

	console.log('content', content);
	return (
		<form onSubmit={handleSubmit} className="flex flex-col p-6 text-slate-50 bg-[#1b2936]">
			<div className="flex items-center  justify-center gap-2">
				<Image
					className="object-cover w-8 h-8 rounded-full self-start"
					width="200"
					height="300"
					src={
						'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=687&q=80'
					}
					alt=""
				/>
				<textarea
					ref={textAreaRef}
					className="border-none outline-0 bg-transparent w-full"
					placeholder="What's Happening ? "
					value={content}
					onChange={(e) => {
						setContent(e.target.value);
						handleChange(e);
					}}
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
