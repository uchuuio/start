import React, { Component } from 'react';
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
`
const StyledHR = styled.hr`
  border: 1px solid white;
  border-radius: 10px;
  margin: 15px 0 15px auto;
`;

const Version = styled.p`
  font-size: 12px;
  color: white;
  margin: 0;
  margin-top: -15px;
`

class App extends Component {
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
          <Box pr={2} width={(1 + Math.sqrt(5)) / 2 - 1}>
            <Links />
          </Box>
          <Box p={2} width={1 - ((1 + Math.sqrt(5)) / 2 - 1)}>
            <Text right color="white" f={9}>
              START
              <Version>BETA V6</Version>
            </Text>
            <StyledHR width={this.randomWidthHr()} />
            <DateTime />
            <Text right color="white">Weather Coming Soon!</Text>
            <StyledHR width={this.randomWidthHr()} />
            <Currency />
            <StyledHR width={this.randomWidthHr()} />
            <Thought />
          </Box>
        </Flex>
      </FullScreenGradient>
    );
  }
}

export default App;
