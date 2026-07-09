import { PrismaClient } from '../../generated/prisma/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { DATABASE_URL, NODE_ENV } from '../config/env.js';

const pool = new Pool({
    connectionString: DATABASE_URL,
});

const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({
    adapter,
    log: NODE_ENV === 'development' ? ['query', 'error'] : ['error'],
});

export const connectDB = async () => {
    try {
        await prisma.$connect();
        console.log('Database connected');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
}

export const disconnectDB = async () => {
    try {
        await prisma.$disconnect();
        console.log('Database disconnected');
    } catch (error) {
        console.error('Database disconnection error:', error);
        process.exit(1);
    }
}
