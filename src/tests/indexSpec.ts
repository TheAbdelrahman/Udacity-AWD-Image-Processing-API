import app from '../index';
import { cropit } from './../util/cropit';
import supertest from 'supertest'; // HTTP assertions
import path from 'path'; // to deal with file paths

const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe('Test responses from endpoints', (): void => {
  it('valid end point res', async (): Promise<void> => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  }); //1

  it('valid path res', async (): Promise<void> => {
    const response = await request.get(
      '/api/route.cropit?filename=fjord&width=300&height=300'
    );
    expect(response.status).toBe(200);
  }); //2

  it('should return error 400 when name is missing', async (): Promise<void> => {
    const response = await request.get(
      '/api/route.cropit?filename=&width=300&height=300'
    );
    expect(response.status).toBe(400);
  }); //3

  it('should return error 400 when negative width', async (): Promise<void> => {
    const response = await request.get(
      '/api/route.cropit?filename=fjord&width=-150&height=300'
    );
    expect(response.status).toBe(400);
  }); //4

  it('should return error 400 when negative Height', async (): Promise<void> => {
    const response = await request.get(
      '/api/route.cropit?filename=fjord&width=300&height=-340'
    );
    expect(response.status).toBe(400);
  }); //5

  it('should return error 400 when width missing', async (): Promise<void> => {
    const response = await request.get(
      '/api/route.cropit?filename=fjord&width=&height=300'
    );
    expect(response.status).toBe(400);
  }); //6

  it('should return error 400 when got height missing', async (): Promise<void> => {
    const response = await request.get(
      '/api/route.cropit?filename=fjord&width=300&height='
    );
    expect(response.status).toBe(400);
  }); //7
});

// testing image processing
describe('test image proccesing', () => {
  it('create a new thumbnail successfully', async (): Promise<void> => {
    const img = path.resolve(__dirname, '../../images/full/fjord.jpg');

    const thumb = path.resolve(
      __dirname,
      '../../images/thumbnail/fjord_200_200'
    );

    await cropit(img, 200, 200);

    expect(thumb).toBeTruthy();
  });
});
