import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ButtonTransparent, Input } from 'rebass';
import styled from 'styled-components';

import { addLink } from '../../actions/links';

const EqualHeightInputs = styled(Input)`
  height: 24px;
  width: 85%;
`;
const AddLinkButton = styled(ButtonTransparent)`
  cursor: pointer;
  padding-left: 0;
  padding-right: 0;
  font-weight: normal;
  text-align: left;
  font-size: 16px;
  text-decoration: underline;
  &:hover,
  &:focus {
    box-shadow: none;
  }
`;

class AddLinkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: '',
      color: '',
      text: '',
      link: '',
    };

    this.handleChanges = this.handleChanges.bind(this);
    this.addLink = this.addLink.bind(this);
  }

  addLink(event) {
    event.preventDefault();
    this.props.addLinkDispatch(
      this.state.group,
      this.state.color,
      this.state.text,
      this.state.link
    );
    this.setState({
      group: '',
      color: '',
      text: '',
      link: '',
    });
  }

  handleChanges(event) {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <tr>
        <td>
          <EqualHeightInputs
            value={this.state.group}
            onChange={this.handleChanges}
            name="group"
            placeholder="Group"
          />
        </td>
        <td>
          <EqualHeightInputs
            value={this.state.color}
            onChange={this.handleChanges}
            name="color"
            placeholder="Color"
          />
        </td>
        <td>
          <EqualHeightInputs
            value={this.state.text}
            onChange={this.handleChanges}
            name="text"
            placeholder="Text"
          />
        </td>
        <td>
          <EqualHeightInputs
            value={this.state.link}
            onChange={this.handleChanges}
            name="link"
            placeholder="URL"
          />
        </td>
        <td>
          <form onSubmit={this.addLink}>
            <AddLinkButton width={1} type="submit">
              Add Link
            </AddLinkButton>
          </form>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addLinkDispatch: (group, color, text, link) => {
    dispatch(addLink(group, color, text, link));
  },
});
const AddLink = connect(null, mapDispatchToProps)(AddLinkForm);

export default AddLink;
