import React from 'react';
import { connect } from 'react-redux';
import { fetchThought } from '../../actions/thought';

import { isAfter } from 'date-fns';
import { Box, Text } from 'rebass';
import styled from 'styled-components';

const StyledText = styled(Text)`
  text-align: right;
  @media screen and (max-width: 32em) {
    text-align: center;
  }
`;

export const ThoughtComponent = props => {
  let wasFetchedNotRecently = false;
  if (isAfter(new Date(), props.thought.nextFetch)) {
    wasFetchedNotRecently = true;
  }

  if (
    (props.thought.lastFetched === '' || wasFetchedNotRecently) &&
    props.thought.isFetching === false
  ) {
    props.fetchLatestThought();
  }

  let alignment = '';
  if (!props.modules.weather && !props.modules.currency) {
    alignment = 'center';
  }

  return (
    <Box className="thought" mx={2}>
      <StyledText
        f={4}
        style={{ textAlign: alignment }}
        dangerouslySetInnerHTML={{ __html: props.thought.jp }}
      />
      <StyledText
        f={4}
        style={{ textAlign: alignment }}
        dangerouslySetInnerHTML={{ __html: props.thought.en }}
      />
    </Box>
  );
};

const mapStateToProps = state => {
  return { modules: state.settings.modules, thought: state.thought };
};

const mapDispatchToProps = dispatch => ({
  fetchLatestThought: () => {
    dispatch(fetchThought());
  },
});

const Thought = connect(
  mapStateToProps,
  mapDispatchToProps
)(ThoughtComponent);

export default Thought;
