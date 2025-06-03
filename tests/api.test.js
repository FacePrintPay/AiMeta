
const request = require('supertest');
const app = require('../src/server');

describe('API Endpoints', () => {
    describe('GET /api/health', () => {
        it('should return health status', async () => {
            const res = await request(app)
                .get('/api/health');
            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status', 'healthy');
            expect(res.body).toHaveProperty('timestamp');
        });
    });

    describe('POST /api/auth', () => {
        it('should validate username', async () => {
            const res = await request(app)
                .post('/api/auth')
                .send({ username: 'ab', password: 'password123' });
            expect(res.statusCode).toBe(400);
            expect(res.body.message).toContain('Username must be at least 3 characters');
        });

        it('should validate password', async () => {
            const res = await request(app)
                .post('/api/auth')
                .send({ username: 'testuser', password: '12345' });
            expect(res.statusCode).toBe(400);
            expect(res.body.message).toContain('Password must be at least 6 characters');
        });
    });

    describe('POST /api/transactions', () => {
        it('should validate transaction amount', async () => {
            const res = await request(app)
                .post('/api/transactions')
                .send({ amount: -100, currency: 'USD', description: 'Test' });
            expect(res.statusCode).toBe(400);
            expect(res.body.message).toContain('Amount must be a positive number');
        });

        it('should validate currency', async () => {
            const res = await request(app)
                .post('/api/transactions')
                .send({ amount: 100, currency: 'USDD', description: 'Test' });
            expect(res.statusCode).toBe(400);
            expect(res.body.message).toContain('Currency must be a 3-letter code');
        });
    });
});
