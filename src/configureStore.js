import { createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import { createLogger } from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import configureEpics from './configureEpics';

import viewer from './ducks/viewer';

const commonReducers = { viewer };

const configureStore = (options, storage) => {
  const { initialState, platformDeps = {}, platformEpics = [], platformReducers = {} } = options;

  const rootEpic = configureEpics({ ...platformDeps }, platformEpics);

  const reducers = combineReducers({
    ...commonReducers,
    ...platformReducers,
  });

  const middlewares = [createEpicMiddleware(rootEpic)];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger({ diff: true, collapsed: true }));
  }

  const enhancers = composeWithDevTools(applyMiddleware(...middlewares), autoRehydrate());

  const store = createStore(reducers, initialState, enhancers);

  // let's the magic happens :–)
  persistStore(store, { blacklist: ['ui'], storage }).purge();

  return store;
};

export default configureStore;
