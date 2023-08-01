import prisma from './prisma';

export const getUsers = async () => {
	try {
		const users = await prisma.user.findMany();
		return { users };
	} catch (e) {
		console.log(e);
		return { error: e };
	}
};

export const getUsersById = async (userName: string) => {
	try {
		const user = await prisma.user.findFirst({
			where: {
				userName: userName,
			},
		});
		return { user };
	} catch (e) {
		return { error: e };
	}
};
