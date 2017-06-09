// @flow

import React from 'react';
import styled from 'styled-components';

const JokeWrapper = styled.div`
  padding: 5;
`;

type JokeProps = {
  text: string,
};

const Joke = ({ text }: JokeProps) => <JokeWrapper>{text}</JokeWrapper>;

export default Joke;
