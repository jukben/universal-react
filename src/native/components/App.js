// @flow

import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Container, Header, Spinner, Body, Title } from 'native-base';
import { appIsRunning } from '../../selectors/viewer';

import Viewer from './Viewer';

type AppProps = {
  appLoading: boolean,
};

const App = ({ appLoading }: AppProps) => (
  <Container>
    {appLoading && <Spinner style={{ flex: 1, alignSelf: 'center' }} color="blue" />}
    {!appLoading &&
      <View style={{ flex: 1 }}>
        <Header>
          <Body>
            <Title>Universal React</Title>
          </Body>
        </Header>
        <Viewer />
      </View>}
  </Container>
);

export default connect(state => ({
  appLoading: !appIsRunning(state),
}))(App);
