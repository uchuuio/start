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

  randomWidthHr() {
    return `${Math.floor(Math.random() * (80 - 40 + 1)) + 40}%`;
  }

  render() {
    return (
      <FullScreenGradient className="gradientbg" gradient={this.state.gradient}>
        <Settings />

        <Flex>
          <Box pr={2} width={6/10}>
            <Links />
          </Box>
          <Box px={2} width={4/10}>
            {
              this.props.settings.modules.datetime &&
              <DateTime locale={this.props.settings.datetime.locale} />
            }
            {
              this.props.settings.modules.weather &&
              <Text right color="white">Weather Coming Soon!</Text>
            }
            {
              this.props.settings.modules.currency &&
              <Currency />
            }
            {
              this.props.settings.modules.thought &&
              <Thought />
            }
          </Box>
        </Flex>
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
