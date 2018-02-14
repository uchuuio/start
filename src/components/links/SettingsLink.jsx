import React from 'react';
import styled from 'styled-components';
import RemoveLink from './RemoveLink';

const StyledTd = styled.td`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const SettingsLink = props => (
  <tr>
    <StyledTd>{props.group}</StyledTd>
    <StyledTd>{props.color}</StyledTd>
    <StyledTd>{props.text}</StyledTd>
    <StyledTd>{props.link}</StyledTd>
    <RemoveLink id={props.id} />
  </tr>
);

export default SettingsLink;
