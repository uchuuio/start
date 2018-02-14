import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import { Box, Text } from 'rebass';
import styled from 'styled-components';

const StyledText = styled(Text)`
  text-align: right;
  @media screen and (max-width: 32em) {
    text-align: center;
  }
`;

class Thought extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thought: {
        en: '',
        jp: '',
      },
    };
  }

  componentDidMount() {
    fetch('https://zen.uchuu.io/api')
      .then(response => response.json())
      .then(data => {
        const enThought = data.thought_en.replace(/\|/g, '<br />');
        const jpThought = data.thought_jp.replace(/\|/g, '<br />');

        this.setState({
          thought: {
            en: enThought,
            jp: jpThought,
          },
        });
      });
  }

  render() {
    return (
      <Box className="thought" mx={2}>
        <StyledText
          color="white"
          f={4}
          dangerouslySetInnerHTML={{ __html: this.state.thought.jp }}
        />
        <StyledText
          color="white"
          f={4}
          dangerouslySetInnerHTML={{ __html: this.state.thought.en }}
        />
      </Box>
    );
  }
}

export default Thought;
