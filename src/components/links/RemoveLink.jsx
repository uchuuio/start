import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeLink } from '../../actions/links';

import styled from 'styled-components';
const RemoveTd = styled.td`
  cursor: pointer;
  text-decoration: underline;
`;

class Link extends Component {
  handleClick(id) {
    this.props.removeLinkDispatch(id);
  }

  render() {
    return (
      <RemoveTd onClick={e => {
        e.preventDefault()
        this.handleClick(this.props.id)
      }}>Remove</RemoveTd>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeLinkDispatch: (id) => {
      dispatch(removeLink(id));
    }
  }
}

const RemoveLink = connect(
  null,
  mapDispatchToProps
)(Link)

export default RemoveLink;
