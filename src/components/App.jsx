import React from 'react';
import { connect } from 'react-redux';

import { Flex, Box, Text } from 'rebass';
import styled from 'styled-components';

import Links from './links/Index';
import Settings from './settings/Index';

import DateTime from './datetime/Index';
import Thought from './thought/Index';
import Currency from './currency/Index';

import { refreshState as refreshCurrency } from '../actions/currency';
import { addImages } from '../actions/settings';
import { refreshState as refreshThought } from '../actions/thought';

const Content = styled(Flex)`
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
`;

const FullScreenBg = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  transform: translate(-50%, -50%);
`;

const AppComponent = props => {
  props.cleanState();
  if (!props.settings.background) {
    props.addImageState();
  }

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
      <FullScreenBg poster={props.settings.background.imageurl} preload="auto" autoPlay muted loop playsInline>
          <source src={props.settings.background.videourl} type="video/mp4" />
      </FullScreenBg>

      <Settings />

      <Content wrap mx="auto" pb={2}>
        {props.settings.modules.datetime && (
          <DateTime locale={props.settings.datetime.locale} />
        )}

        {props.settings.modules.currency && (
          <Box style={{alignSelf: 'center'}} width={getColumnWidths()}>
            <Currency />
          </Box>
        )}
        {props.settings.modules.weather && (
          <Box style={{alignSelf: 'center'}} width={getColumnWidths()}>
            <Text>Weather Coming Soon!</Text>
          </Box>
        )}
        {props.settings.modules.thought && (
          <Box style={{alignSelf: 'center'}} width={getColumnWidths()}>
            <Thought />
          </Box>
        )}
      </Content>

      <Links />
    </div>
  );
};

const mapStateToProps = state => ({
  settings: state.settings,
});

const mapDispatchToProps = dispatch => ({
  cleanState: () => {
    dispatch(refreshCurrency());
    dispatch(refreshThought());
  },
  addImageState: () => {
    dispatch(addImages());
  }
});

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);

export default App;
