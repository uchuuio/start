import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import { Box, Text } from 'rebass';

class Currency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: {
                source: 'GBP',
                target: 'USD,JPY',
                currencies: ['USD', 'JPY'],
                rates: [],
            },
        };
    }

    componentDidMount() {
        fetch(`https://api.fixer.io/latest?base=${this.state.currency.source}&symbols=${this.state.currency.target}`)
            .then((response) => response.json())
            .then((res) => {
                this.setState((prevState) => {
                    return {
                        currency: {
                            source: prevState.currency.source,
                            target: prevState.currency.target,
                            currencies: prevState.currency.currencies,
                            rates: res.rates,
                        },
                    };
                });
            });
    }

    render() {
        return (
            <Box>
                {this.state.currency.currencies.map((currency, i) => (
                    <Box key={i}>
                        <Text color="white" f={4} right>£1 buys {this.state.currency.rates[currency]} {currency}</Text>
                    </Box>
                ))}
            </Box>
        );
    }
}

export default Currency;