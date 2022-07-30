import assert from 'assert';
import request from 'supertest';
import { default as App } from '../index';

const { app, server, db } = App;
let api: request.SuperTest<request.Test>;

beforeAll(async () => {
    api = request(app);
    await db.initialize();
});

describe('server.ts', () => {
    test('login test', async () => {
        const response = await api.post('/auth/login')
            .send({
                email: 'email1@email.com',
                password: '123123123'
            })
            .expect(200);

        expect(response.status).toEqual(200);
        expect(response.body.result.user.email).toEqual('email1@email.com');
        expect(response.body.result.token).toBeDefined();
    });

    test('get all groups', async () => {
        const login = await api.post('/auth/login')
            .send({
                email: 'email1@email.com',
                password: '123123123'
            })
            .expect(200);

        const { body: { result: { token } } } = login;

        const groups = await api.post('/api/group')
                .set({ Authorization: `Bearer ${token}` })
                .expect(200);
    });
});

afterAll(async () => {
    await db.destroy();
    server.stopServer();
});