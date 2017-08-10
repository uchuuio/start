import React, { Component } from 'react';
import RemoveLink from './RemoveLink';

class SettingsLink extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.group}</td>
        <td>{this.props.color}</td>
        <td>{this.props.text}</td>
        <td>{this.props.link}</td>
        <RemoveLink id={this.props.id} />
      </tr>
    );
  }
}

export default SettingsLink;
