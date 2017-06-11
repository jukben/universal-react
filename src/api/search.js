// @flow
import type { Error } from '../flow';

export const getRandomJoke = (): Promise<Error | string> =>
  fetch('https://api.chucknorris.io/jokes/random', {
    headers: new Headers({ Accept: 'application/json' }),
    method: 'GET',
  })
    .then((response) => {
      if (response.status !== 200) {
        const errorObject = {
          error: true,
          error_description: 'ChuckNorris.io API error',
        };

        throw errorObject;
      }

      return response.json();
    })
    .then(({ value: joke }) => joke)
    .catch((possibleErrorObject) => {
      if (possibleErrorObject.error) return Promise.reject(possibleErrorObject);

      const errorObject = {
        error: true,
        error_description: 'Something went wrong. Are you offline?',
      };

      throw errorObject;
    });

export default getRandomJoke;
