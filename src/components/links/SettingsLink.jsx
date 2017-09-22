import React, { Component } from 'react';
import RemoveLink from './RemoveLink';

import styled from 'styled-components';
const StyledTd = styled.td`
  padding-top: 10px;
  padding-bottom: 10px;
`;

class SettingsLink extends Component {
  render() {
    return (
      <tr>
        <StyledTd>{this.props.group}</StyledTd>
        <StyledTd>{this.props.color}</StyledTd>
        <StyledTd>{this.props.text}</StyledTd>
        <StyledTd>{this.props.link}</StyledTd>
        <RemoveLink id={this.props.id} />
      </tr>
    );
  }
}

export default SettingsLink;
