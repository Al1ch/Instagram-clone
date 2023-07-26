import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

type Data = {
	id: string;
};

export default async function handler(res: NextApiResponse, req: NextApiRequest) {
	if (req.method === 'GET') {
		try {
			const posts = await prisma.post.findMany({
				where: {
					authorId: req.body.id,
				},
			});
			return res.status(200).json(posts);
		} catch (e) {
			res.status(500).json({ message: 'Something went wrong' });
		}
	}
}
