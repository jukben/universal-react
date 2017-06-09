// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getJoke, isSearchLoading, getLastError } from '../../selectors/viewer';
import { fetchInitAction } from '../../ducks/viewer';
import type { Error } from '../../flow';

import Joke from './Joke';
import Button from './Button';
import InfoBox from './InfoBox';

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
    min-height: 400px;
    ${({ loading }) =>
      loading &&
      `
    &::before {
      display: flex;
      flex: 1;
      font-size: 60px;
      align-items: center;
      justify-content: center;
      content: '\\1F64F'; // praying emoji :]
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%
      background: rgba(255,255,255,0.6);
      z-index: 1;
    }`}
`;

const Wrapper = styled.div`
  margin: 20px;
`;

type ViewerProps = {
  joke: string,
  isLoading: boolean,
  fetchNext: typeof fetchInitAction,
  lastError: Error,
};

const Viewer = ({ joke, isLoading, fetchNext, lastError }: ViewerProps) =>
  (<Content loading={isLoading}>
    <Wrapper>
      {joke && <Joke text={joke} />}
      {lastError && <InfoBox danger>{lastError.error_description}</InfoBox>}
    </Wrapper>
    <Wrapper>
      {(joke || lastError) && <Button onClick={fetchNext}>Next one!</Button>}
    </Wrapper>
  </Content>);

export default connect(
  state => ({
    joke: getJoke(state),
    isLoading: isSearchLoading(state),
    lastError: getLastError(state),
  }),
  {
    fetchNext: fetchInitAction,
  },
)(Viewer);
