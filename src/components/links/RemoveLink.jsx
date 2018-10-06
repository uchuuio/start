import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { removeLink } from '../../actions/links';

const RemoveTd = styled.td`
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
  text-decoration: underline;
`;

export const RemoveLinkComponent = props => {
  function handleClick(id) {
    props.removeLinkDispatch(id);
  }

  return (
    <RemoveTd
      onClick={() => {
        handleClick(props.id);
      }}
    >
      Remove
    </RemoveTd>
  );
};

const mapDispatchToProps = dispatch => ({
  removeLinkDispatch: id => {
    dispatch(removeLink(id));
  },
});

const RemoveLink = connect(
  null,
  mapDispatchToProps
)(RemoveLinkComponent);

export default RemoveLink;
