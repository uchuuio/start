import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import { Box, Text } from 'rebass';

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
            .then((response) => response.json())
            .then((data) => {
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
            <Box className="thought">
                <Text right color="white" f={4} dangerouslySetInnerHTML={{__html: this.state.thought.jp}} />
                <Text right color="white" f={4} dangerouslySetInnerHTML={{__html: this.state.thought.en}} />
            </Box>
        );
    }
}

export default Thought;