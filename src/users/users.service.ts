import { Injectable, OnModuleInit } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { users } from './schema';
import { eq } from 'drizzle-orm';

const db = new Database('./users.db');
const drizzleDb = drizzle(db);

@Injectable()
export class UsersService implements OnModuleInit {
    async onModuleInit() {
        try {
            await drizzleDb.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE
    )`);
            console.log('Users table initialized successfully');
        } catch (error) {
            console.error('Failed to initialize users table:', error);
            throw error;
        }
    }
    async findAll() {
        return drizzleDb.select().from(users);
    }

    async create(userData: any) {
        const [createdUser] = await drizzleDb
            .insert(users)
            .values(userData)
            .returning();
        return createdUser;
    }

    async findOne(id: number) {
        const [user] = await drizzleDb
            .select()
            .from(users)
            .where(eq(users.id, id));
        return user;
    }

    async update(id: number, userData: any) {
        const [updatedUser] = await drizzleDb
            .update(users)
            .set(userData)
            .where(eq(users.id, id))
            .returning();
        return updatedUser;
    }

    async remove(id: number) {
        const [deletedUser] = await drizzleDb
            .delete(users)
            .where(eq(users.id, id))
            .returning();
        return deletedUser;
    }
}
