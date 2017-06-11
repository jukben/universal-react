import configureMockStore from 'redux-mock-store';
import { createEpicMiddleware } from 'redux-observable';
import viewerReducer, { fetchInitAction, fetchSuccessAction } from '../viewer';
import configureEpics from '../../configureEpics';

import stateFetchedMock from '../../__test__/state.fetched.json';
import httpMockSuccess from '../../api/__tests__/mock.successFetch.json';
import httpMockError from '../../api/__tests__/mock.errorAuth.json';

const wait = (time = 0) => new Promise(res => setTimeout(() => res(), time));

describe('Viewer reducer', () => {
  it('fetch init should set loading to true', () => {
    expect(
      viewerReducer(
        {
          searchLoading: false,
          lastError: null,
        },
        fetchInitAction(),
      ),
    ).toEqual({ lastError: null, searchLoading: true });
  });

  it('fetch success should set loading to false', () => {
    expect(
      viewerReducer(
        {
          searchLoading: false,
          lastError: null,
        },
        fetchSuccessAction(),
      ),
    ).toEqual({ lastError: null, searchLoading: false });
  });
});

const rootEpic = configureEpics();
const epics = createEpicMiddleware(rootEpic);
const mockStore = configureMockStore([epics]);

describe('Viewer epics', () => {
  let store;

  beforeEach(() => {
    store = mockStore(stateFetchedMock);
  });

  afterEach(() => {
    store.clearActions();
    epics.replaceEpic(rootEpic);
    fetch.resetMocks();
  });

  it('should correctly dispatch fetch success', () => {
    store.dispatch(fetchSuccessAction('random joke haha'));

    expect(store.getActions()).toMatchSnapshot();
  });

  it('should correctly fetch random gif', async () => {
    fetch.mockResponse(JSON.stringify(httpMockSuccess), { status: 200 });
    store.dispatch(fetchInitAction());

    await wait();
    expect(store.getActions()).toMatchSnapshot();
  });

  it('should make correct report about error', async () => {
    fetch.mockResponse(JSON.stringify(httpMockError), { status: 400 });
    store.dispatch(fetchInitAction());

    await wait();
    expect(store.getActions()).toMatchSnapshot();
  });
});
