import React from 'react';
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

const AppComponent = props => {
  function getColumnWidths() {
    let i = -1;

    for (const module in props.settings.modules) {
      if (props.settings.modules[module]) {
        i += 1;
      }
    }

    const width = 1 / i;
    return [1, width];
  }

  return (
    <div>
      <FullScreenGradient className="gradientbg" />
      <Settings />

      {props.settings.modules.datetime && (
        <DateTime locale={props.settings.datetime.locale} />
      )}

      <Flex wrap>
        {props.settings.modules.weather && (
          <Box width={getColumnWidths()}>
            <Text>Weather Coming Soon!</Text>
          </Box>
        )}
        {props.settings.modules.currency && (
          <Box width={getColumnWidths()}>
            <Currency />
          </Box>
        )}
        {props.settings.modules.thought && (
          <Box width={getColumnWidths()}>
            <Thought />
          </Box>
        )}
      </Flex>

      <Links />
    </div>
  );
};

const mapStateToProps = state => ({
  settings: state.settings,
});

const App = connect(mapStateToProps)(AppComponent);

export default App;
