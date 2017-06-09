import { isSearchLoading, appIsRunning, getJoke, getLastError } from '../viewer';
import stateFetched from '../../__test__/state.fetched.json';

describe('Viewer selectors', () => {
  it('search should be not in progress', () => {
    expect(isSearchLoading(stateFetched)).toBe(false);
  });

  it('app should be running', () => {
    expect(appIsRunning(stateFetched)).toBe(true);
  });

  it('should return cite object', () => {
    expect(getJoke(stateFetched)).toBe('Chuck Norris irons his trousers with them still on.');
  });

  it('Last error should be null', () => {
    expect(getLastError(stateFetched)).toBe(null);
  });
});
