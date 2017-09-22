import React, { Component } from 'react';

import styled from 'styled-components';

const StyledA = styled.a`
  background: white;
  border-left: 5px solid ${props => props.color ? props.color : 'white'};
  color: ${props => props.color ? props.color : '#aa201d'};
  display: block;
  font-size: 20px;
  padding: 10px;
  text-decoration: none;
  transition: all .2s;
  &:hover {
    background: ${props => props.color ? props.color : '#aa201d'};
    color: white;
    transition: all .2s;
  }
`;

class Link extends Component {
  render() {
    return (
      <li><StyledA color={this.props.color} href={this.props.link} title={this.props.text}>{this.props.text}</StyledA></li>
    );
  }
}

export default Link;
