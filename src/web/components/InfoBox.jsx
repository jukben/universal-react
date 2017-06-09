// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  danger?: boolean, //eslint-disable-line
  children?: string, //eslint-disable-line
};

const InfoBoxStyled = styled.div`
  padding: 10px;
  font-family: Arial;
  border: solid 1px ${({ danger }) => (danger ? '#d73a49' : '#0366d6')}
  color: ${({ danger }) => (danger ? '#d73a49' : '#0366d6')};
  border-radius: 3px;
`;

const InfoBox = ({ danger = false, children }: Props) => (
  <InfoBoxStyled danger={danger}>
    {danger
      ? <span role="img" aria-label="stop">✋</span>
      : <span role="img" aria-label="points up">☝</span>}
    {' '}
    {children}
  </InfoBoxStyled>
);

export default InfoBox;
