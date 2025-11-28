import express, { Express } from 'express';
import request from 'supertest';

describe('App', () => {
    let app: Express;

    beforeAll(() => {
        app = express();
        app.get('/', (req, res) => {
            res.send('Hello World!');
        });
    });

    it('should return hello world', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello World!');
    });
});
