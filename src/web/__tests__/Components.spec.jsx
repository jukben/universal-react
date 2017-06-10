import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from '../../configureStore';

import storeFetchedMock from '../../__test__/state.fetched.json';

import App from '../components/App';
import Button from '../components/Button';
import InfoBox from '../components/InfoBox';

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
  it('Button renders correctly', () => {
    const tree = renderer.create(injected(<Button />)).toJSON();
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
  it('App renders correctly', () => {
    const tree = renderer.create(injected(<App />, storeFetched)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Button renders correctly', () => {
    const tree = renderer.create(injected(<Button />, storeFetched)).toJSON();
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
