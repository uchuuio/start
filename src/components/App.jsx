import React, { Component } from 'react';
import { Gradient } from 'uigradients';

import Links from './links/Index';
import Settings from './settings/Index';

import { Text } from 'rebass';
import styled from 'styled-components';
const FullScreenGradient = styled(Gradient)`
  height: 100vh;
  width: 100vw;
`

class App extends Component {
  render() {
    return (
      <FullScreenGradient gradient="cherry">
        <Settings />

        <Text color="white">ZenThought</Text>
        <Text color="white">Currency</Text>
        <Text color="white">JP Date</Text>
        <Text color="white">Weather</Text>

        <Links />
      </FullScreenGradient>
    );
  }
}

export default App;
