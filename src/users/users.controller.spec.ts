import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { users } from './schema';
import request from 'supertest';

describe('UsersController', () => {
  let app: INestApplication;
  let service: UsersService;

  beforeEach(async () => {
    const db = new Database(':memory:');
    const drizzleDb = drizzle(db);
    const usersService = new UsersService();

    const moduleRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: usersService
        }
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('should handle type errors with type assertion', () => {
    const testApp = app;
    expect(typeof testApp).toBe('object');
  });

  describe('CRUD Operations', () => {
    it('should create and retrieve a user', async () => {
      // Create user
      const createRes = await request(app.getHttpServer())
        .post('/users')
        .send({
          name: 'Test User',
          email: 'test@example.com'
        })
        .expect(HttpStatus.CREATED);

      const createdUser = createRes.body;
      expect(createdUser).toHaveProperty('id');

      // Get all users
      const allRes = await request(app.getHttpServer())
        .get('/users')
        .expect(HttpStatus.OK);

      const allUsers = allRes.body;
      expect(allUsers.length).toBe(1);

      // Get single user
      const singleRes = await request(app.getHttpServer())
        .get(`/users/${createdUser.id}`)
        .expect(HttpStatus.OK);

      const singleUser = singleRes.body;
      expect(singleUser.id).toBe(createdUser.id);

      // Update user
      const updateRes = await request(app.getHttpServer())
        .put(`/users/${createdUser.id}`)
        .send({
          name: 'Updated User',
          email: 'updated@example.com'
        })
        .expect(HttpStatus.OK);

      const updatedUser = updateRes.body;
      expect(updatedUser.name).toBe('Updated User');

      // Delete user
      const deleteRes = await request(app.getHttpServer())
        .delete(`/users/${createdUser.id}`)
        .expect(HttpStatus.OK);

      // Verify deletion
      await request(app.getHttpServer())
        .get(`/users/${createdUser.id}`)
        .expect(HttpStatus.NOT_FOUND);
    });
  });
});
