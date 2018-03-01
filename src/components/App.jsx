import React, { Component } from 'react';
import { connect } from 'react-redux';

import { generator } from 'uigradients';
import { Flex, Box, Text } from 'rebass';
import styled from 'styled-components';

import Links from './links/Index';
import Settings from './settings/Index';

import DateTime from './datetime/Index';
import Thought from './thought/Index';
import Currency from './currency/Index';

const Gradient = generator({
  gradient: 'timber',
  type: 'radial',
  options: {
    position: '45px 20px',
    shape: 'ellipse',
    colorStops: ['0%', '100%'],
    extent: 'farthest-corner',
  },
});

const FullScreenGradient = styled.div`
  ${Gradient};
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

class AppComponent extends Component {
  getColumnWidths() {
    let i = -1;

    for (const module in this.props.settings.modules) {
      if (this.props.settings.modules[module]) {
        i += 1;
      }
    }

    const width = 1 / i;
    return [1, width];
  }

  render() {
    return (
      <div>
        <FullScreenGradient className="gradientbg" />
        <Settings />

        {this.props.settings.modules.datetime && (
          <DateTime locale={this.props.settings.datetime.locale} />
        )}

        <Flex wrap>
          {this.props.settings.modules.weather && (
            <Box width={this.getColumnWidths()}>
              <Text>Weather Coming Soon!</Text>
            </Box>
          )}
          {this.props.settings.modules.currency && (
            <Box width={this.getColumnWidths()}>
              <Currency />
            </Box>
          )}
          {this.props.settings.modules.thought && (
            <Box width={this.getColumnWidths()}>
              <Thought />
            </Box>
          )}
        </Flex>

        <Links />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
});

const App = connect(mapStateToProps)(AppComponent);

export default App;
