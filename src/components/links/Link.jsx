import React, { Component } from 'react';

class Link extends Component {
  render() {
    return (
      <li className="Link"><a href={this.props.link} title={this.props.text}>{this.props.text}</a></li>
    );
  }
}

export default Link;
