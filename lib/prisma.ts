import { PrismaClient } from '@prisma/client';

declare global {
	var prisma: PrismaClient;
}

let prisma = global.prisma;

if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient();
} else {
	if (!global.prisma) {
		global.prisma = new PrismaClient();
	}
}

export default prisma;
