import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeLink } from '../../actions/links';

class Link extends Component {
  handleClick(id) {
    this.props.removeLinkDispatch(id);
  }

  render() {
    return (
      <td onClick={e => {
        e.preventDefault()
        this.handleClick(this.props.id)
      }}>Remove</td>
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
