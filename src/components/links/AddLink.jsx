import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLink } from '../../actions/links';

import { Button, Input, Row, Column } from 'rebass';
import styled from 'styled-components';
const EqualHeightInputs = styled(Input)`
  height: 24px;
`;
const AddLinkButton = styled(Button)`
  cursor: pointer;
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
    })
  }

  handleChanges(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }

  render() {
    return (

      <form onSubmit={this.addLink}>
        <Row>
          <Column mb={0}>
            <EqualHeightInputs
              value={this.state.group}
              onChange={this.handleChanges}
              name="group"
              placeholder="Group"
            />
          </Column>
          <Column mb={0}>
            <EqualHeightInputs
              value={this.state.color}
              onChange={this.handleChanges}
              name="color"
              placeholder="Color"
            />
          </Column>
          <Column mb={0}>
            <EqualHeightInputs
              value={this.state.text}
              onChange={this.handleChanges}
              name="text"
              placeholder="Text"
            />
          </Column>
          <Column mb={0}>
            <EqualHeightInputs
              value={this.state.link}
              onChange={this.handleChanges}
              name="link"
              placeholder="URL"
            />
          </Column>
          <Column mb={0}>
            <AddLinkButton width={1} type="submit">Add Link</AddLinkButton>
          </Column>
        </Row>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addLinkDispatch: (group, color, text, link) => {
      dispatch(addLink(group, color, text, link));
    }
  }
}
const AddLink = connect(
  null,
  mapDispatchToProps
)(AddLinkForm)

export default AddLink;