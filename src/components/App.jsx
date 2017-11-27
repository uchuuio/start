import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Gradient } from 'uigradients';

import Links from './links/Index';
import Settings from './settings/Index';

import DateTime from './datetime/Index';
import Thought from './thought/Index';
import Currency from './currency/Index';

import { Flex, Box, Text } from 'rebass';
import styled from 'styled-components';
const FullScreenGradient = styled(Gradient)`
  height: 100vh;
  width: 100vw;
`;

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gradient: 'cherry',
    };
  }

  componentDidMount() {
    this.gradientID = setInterval(
      () => this.gradientPicker(),
      30000
    );
  }

  componentWillUnmount() {
    clearInterval(this.gradientID);
  }

  gradientPicker() {
    const gradients = [
      'cherry',
      'kyoto',
      'peach',
      'reef',
      'cherryblossoms',
      'amethyst',
    ];
    const randomIndex = Math.floor(Math.random() * gradients.length);
    const gradient = gradients[randomIndex];
    this.setState((prevGradient) => {
      // Add keyframes from prevous gradient to new gradient
      return {gradient}
    });
  }

  getColumnWidths() {
    let i = -1;

    for (const module in this.props.settings.modules) {
      if (this.props.settings.modules[module]) {
        i++;
      }
    }

    const width = 1/i;
    return [1, width];
  }

  render() {
    return (
      <FullScreenGradient className="gradientbg" gradient={this.state.gradient}>
        <Settings />

        {
          this.props.settings.modules.datetime &&
          <DateTime locale={this.props.settings.datetime.locale} />
        }

        <Flex wrap>
          {
            this.props.settings.modules.weather &&
            <Box width={this.getColumnWidths()}><Text>Weather Coming Soon!</Text></Box>
          }
          {
            this.props.settings.modules.currency &&
            <Box width={this.getColumnWidths()}><Currency /></Box>
          }
          {
            this.props.settings.modules.thought &&
            <Box width={this.getColumnWidths()}><Thought /></Box>
          }
        </Flex>

        <Links />
      </FullScreenGradient>
    );
  }
}

const mapStateToProps = state => {
  return {
    settings: state.settings
  }
};

const App = connect(
  mapStateToProps
)(AppComponent);

export default App;
