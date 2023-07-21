import { PrismaClient } from '@prisma/client';
import { users } from './users';
const prisma = new PrismaClient();

async function main() {
	for (let user of users) {
		await prisma.user.create({
			data: user,
		});
	}
}
