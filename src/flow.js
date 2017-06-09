// @flow

export type Error = {
  error: boolean,
  error_description: string,
};

export type Action = {
  type: string,
  payload: Object,
};

export type EpicDependencies = {
  getState: () => void,
};
