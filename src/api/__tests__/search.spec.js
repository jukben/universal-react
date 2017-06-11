import { getRandomJoke } from '../search';
import mockSuccess from './mock.successFetch.json';
import mockError from './mock.errorAuth.json';

describe('API Search', () => {
  afterEach(() => {
    fetch.resetMocks();
  });

  it('should get normalized data', async () => {
    fetch.mockResponse(JSON.stringify(mockSuccess), { status: 200 });
    await expect(getRandomJoke()).resolves.toMatchSnapshot();
  });

  it('should throw error', async () => {
    fetch.mockResponse(JSON.stringify(mockError), { status: 400 });
    await expect(getRandomJoke()).rejects.toMatchSnapshot();
  });
});
