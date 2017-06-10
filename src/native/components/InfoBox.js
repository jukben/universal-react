// @flow
import React from 'react';
import styled from 'styled-components/native';
import { Icon } from 'native-base';

type InfoBoxProps = {
  danger?: boolean, // eslint-disable-line
  text: string,
};

const InfoBoxWrapper = styled.View`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 10px;
  border-style: solid;
  border-color: ${({ danger }) => (danger ? '#d73a49' : '#0366d6')};
  border-width: 1;
  align-items: center;
  flex-direction: row;
`;

const InfoBoxText = styled.Text`
  color: ${({ danger }) => (danger ? '#d73a49' : '#0366d6')}
`;

const InfoBox = ({ danger = false, text }: InfoBoxProps) =>
  (<InfoBoxWrapper danger={danger}>
    <Icon
      style={{ marginRight: 5, color: danger ? '#d73a49' : '#0366d6' }}
      name={danger ? 'hand' : 'information-circle'}
    />
    <InfoBoxText danger={danger}>
      {text}
    </InfoBoxText>
  </InfoBoxWrapper>);

export default InfoBox;
