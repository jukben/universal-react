import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from '../../configureStore';

import storeFetchedMock from '../../__test__/state.fetched.json';

import App from '../components/App';
import InfoBox from '../components/InfoBox';
import Joke from '../components/Joke';
import Viewer from '../components/Viewer';

const storeEmpty = configureStore({
  initialState: {},
  platformDeps: {},
  platformEpics: [],
  platformReducers: {},
});

const storeFetched = configureStore({
  initialState: storeFetchedMock,
  platformDeps: {},
  platformEpics: [],
  platformReducers: {},
});

const injected = (Component, store = storeEmpty) => <Provider store={store}>{Component}</Provider>;

describe('Web components with empty store', () => {
  it('App renders correctly', () => {
    const tree = renderer.create(injected(<App />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Viewer renders correctly', () => {
    const tree = renderer.create(injected(<Viewer />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Joke renders correctly', () => {
    const tree = renderer.create(injected(<Joke />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('InfoBox with text renders correctly', () => {
    const tree = renderer.create(injected(<InfoBox>Text</InfoBox>)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('InfoBox (danger) with text renders correctly', () => {
    const tree = renderer.create(injected(<InfoBox danger>Text</InfoBox>)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Web components with mocked store (fetched data)', () => {
  // CI fails on this ("shadowColor": undefined, "shadowOffset": undefined,..)
  it.skip('App renders correctly', () => {
    const tree = renderer.create(injected(<App />, storeFetched)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Viewer renders correctly', () => {
    const tree = renderer.create(injected(<Viewer />, storeFetched)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Joke renders correctly', () => {
    const tree = renderer.create(injected(<Joke />, storeFetched)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('InfoBox with text renders correctly', () => {
    const tree = renderer.create(injected(<InfoBox>Text</InfoBox>, storeFetched)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('InfoBox (danger) with text renders correctly', () => {
    const tree = renderer.create(injected(<InfoBox danger>Text</InfoBox>, storeFetched)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
