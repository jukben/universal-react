import { combineEpics } from 'redux-observable';
import { epics as viewer } from './ducks/viewer';

const epics = [...viewer];

export default (deps = {}, platformEpics = []) => (action$, { getState }) =>
  combineEpics(...epics, ...platformEpics)(action$, { ...deps, getState });
