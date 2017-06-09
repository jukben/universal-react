// @flow

import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { appIsRunning } from '../../selectors/viewer';
import media from '../../common/helpers/media';
import Viewer from './Viewer';

const Content = styled.div`
  padding: 10px;
  max-width: 500px;
  margin: 10px auto;
  ${media.tablet`max-width: 100%;`}
`;

const AppLoader = styled.div`
  width: 100%;
  height: calc(100vh - 40px);
  font-family: Arial;
  font-size: 25px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center; 
  align-items: center; 
`;

type AppProps = {
  appLoading: boolean,
};

const App = ({ appLoading }: AppProps) =>
  (<Router>
    <Content>
      {appLoading && <AppLoader>App is loading...</AppLoader>}
      {!appLoading &&
        <div>
          <Route path="/" component={Viewer} />
        </div>}
    </Content>
  </Router>);

export default connect(state => ({
  appLoading: !appIsRunning(state),
}))(App);
