import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeLink } from '../../actions/links';

let RemoveLink = ({ dispatch }) => {
    let id;
    return (
        <span onClick={e => {
            console.log(e);
            id = this.props.id;
            dispatch(removeLink(id));
        }}>Remove</span>
    );
}
RemoveLink = connect()(RemoveLink);

class SettingsLink extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.group}</td>
        <td>{this.props.color}</td>
        <td>{this.props.text}</td>
        <td>{this.props.link}</td>
        <td><RemoveLink id={this.props.id}/></td>
      </tr>
    );
  }
}

export default SettingsLink;
