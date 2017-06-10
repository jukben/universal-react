// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { Button, Spinner, Text } from 'native-base';
import { getJoke, isSearchLoading, getLastError } from '../../selectors/viewer';
import { fetchInitAction } from '../../ducks/viewer';
import type { Error } from '../../flow';

import Joke from './Joke';
import InfoBox from './InfoBox';

const Content = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.View`
  margin: 20px;
`;

type ViewerProps = {
  joke: string,
  isLoading: boolean,
  fetchNext: typeof fetchInitAction,
  lastError: Error,
};

const Viewer = ({ joke, isLoading, fetchNext, lastError }: ViewerProps) =>
  (<Content>
    <Wrapper>
      {joke && <Joke text={joke} />}
      {lastError && <InfoBox danger text={lastError.error_description} />}
    </Wrapper>
    <Wrapper>
      {(joke || lastError) &&
        <Button onPress={fetchNext}>
          {isLoading
            ? <Spinner style={{ alignSelf: 'center' }} color="blue" />
            : <Text>Next one!</Text>}
        </Button>}
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
