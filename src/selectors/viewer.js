import { createSelector } from 'reselect';
import { getViewer as getState } from './root';

export const isSearchLoading = createSelector(getState, ({ searchLoading }) => searchLoading);
export const appIsRunning = createSelector(getState, ({ appRun }) => !!appRun);
export const getJoke = createSelector(getState, ({ joke }) => joke);
export const getLastError = createSelector(getState, ({ lastError }) => lastError);
