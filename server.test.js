const request = require('supertest');
const app = require('./server'); 

describe('Server', () => {
  test('should return a success message on hitting the root endpoint', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Server is running');
  });
});
