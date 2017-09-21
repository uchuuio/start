import React, { Component } from 'react';

import styled from 'styled-components';

const StyledLi = styled.li`
  padding: 10px;
  background: white;
  border-left: 5px solid white;
`;

const StyledA = styled.a`
  font-size: 20px;
  text-decoration: none;
  transition: all .2s;
  &:hover {
    text-decoration: underline;
    transition: all .2s;
  }
`;

class Link extends Component {
  render() {
    return (
      <StyledLi style={{borderColor: this.props.color}}><StyledA style={{color: this.props.color}} href={this.props.link} title={this.props.text}>{this.props.text}</StyledA></StyledLi>
    );
  }
}

export default Link;
