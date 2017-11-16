import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSetting } from '../../actions/settings';

import { Checkbox, Label, Input, Select, Subhead } from 'rebass';
import styled from 'styled-components';

const FormGroup = styled.div`
  margin-top: 10px;
`;
const StyledInput = styled(Input)`
  box-sizing: border-box;
`

class UpdateSettingsForm extends Component {
  constructor(props) {
    super(props);
    this.state = props.settings;

    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const section = target.getAttribute('data-section');
    const name = target.name;

    this.props.updateSettingDispatch(
      section,
      name,
      value
    );

    this.setState({
      [section]: {
        [name]: value
      }
    });
  }

  render() {
    return (
      <div className="configs">
        <section>
          <Subhead>Date/Time</Subhead>
          <FormGroup>
            <Label>Locale</Label>
            <StyledInput
              value={this.state.datetime.locale}
              onChange={this.handleChanges}
              data-section="datetime"
              name="locale"
              placeholder="en"
            />
          </FormGroup>
        </section>

        <section>
          <Subhead>
            Weather
            <Label style={{display: "inline-flex", marginLeft: 15}}>
              <Checkbox
                checked={this.state.modules.weather}
                value={this.state.modules.weather}
                onChange={this.handleChanges}
                data-section="modules"
                name="weather"
              />
              Enable
            </Label>
          </Subhead>

          {
            this.state.modules.weather &&
            <div className="weather-enabled">
              <FormGroup>
                <Label>API Key for Darksky</Label>
                <StyledInput
                  value={this.state.weather.key}
                  onChange={this.handleChanges}
                  data-section="weather"
                  name="key"
                  placeholder="API Key for Darksky"
                />
              </FormGroup>
              <FormGroup>
                <Label>Location</Label>
                <StyledInput
                  value={this.state.weather.location}
                  onChange={this.handleChanges}
                  data-section="weather"
                  name="location"
                  placeholder="Location"
                />
              </FormGroup>
              <FormGroup>
                <Label>Units</Label>
                <Select value={this.state.weather.units} onChange={this.handleChanges} data-section="weather" name="units">
                  <option value=""></option>
                  <option value="c,mph">c,mph</option>
                  <option value="f">f</option>
                </Select>
              </FormGroup>
            </div>
          }
        </section>

        <section>
          <Subhead>
            Currency
            <Label style={{display: "inline-flex", marginLeft: 15}}>
              <Checkbox
                checked={this.state.modules.currency}
                value={this.state.modules.currency}
                onChange={this.handleChanges}
                data-section="modules"
                name="currency"
              />
              Enable
            </Label>
          </Subhead>

          {
            this.state.modules.currency &&
            <div className="currency-enabled">
              <FormGroup>
                <Label>Base Curency</Label>
                <StyledInput
                  value={this.state.currency.base}
                  onChange={this.handleChanges}
                  data-section="currency"
                  name="base"
                  placeholder="eg. GBP"
                />
              </FormGroup>
              <FormGroup>
                <Label>Target(s)</Label>
                <StyledInput
                  value={this.state.currency.target}
                  onChange={this.handleChanges}
                  data-section="currency"
                  name="target"
                  placeholder="eg. USD. For multiple separate with , eg. USD,JPY"
                />
              </FormGroup>
            </div>
          }
        </section>

        <section>
          <Subhead>
            Thought
            <Label style={{display: "inline-flex", marginLeft: 15}}>
              <Checkbox
                checked={this.state.modules.thought}
                value={this.state.modules.thought}
                onChange={this.handleChanges}
                data-section="modules"
                name="thought"
              />
              Enable
            </Label>
          </Subhead>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateSettingDispatch: (area, section, content) => {
      dispatch(updateSetting(area, section, content));
    }
  }
}
const UpdateSettings = connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateSettingsForm)

export default UpdateSettings;