import React from 'react';

import styled from 'styled-components';

const StyledA = styled.a`
  background: white;
  border-left: 5px solid ${props => (props.color ? props.color : 'white')};
  color: ${props => (props.color ? props.color : '#aa201d')};
  display: block;
  font-size: 20px;
  padding: 10px;
  text-decoration: none;
  transition: all 0.2s;
  &:hover {
    background: ${props => (props.color ? props.color : '#aa201d')};
    color: white;
    transition: all 0.2s;
  }
`;

const Link = props => (
  <li className="link-item">
    <StyledA color={props.color} href={props.link} title={props.text}>
      {props.text}
    </StyledA>
  </li>
);

export default Link;
