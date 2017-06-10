// @flow
import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'native-base';

const JokeWrapper = styled.View`
  padding: 5px;
`;

type JokeProps = {
  text: string,
};

const Joke = ({ text }: JokeProps) => <JokeWrapper><Text>{text}</Text></JokeWrapper>;

export default Joke;
