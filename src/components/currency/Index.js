import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';

import { Box, Text } from 'rebass';

class CurrencyComponent extends Component {
    constructor(props) {
        super(props);
        const currencies = props.currency.target.split(',');
        this.state = {
            currency: {
                base: props.currency.base,
                target: props.currency.target,
                currencies,
                rates: [],
            },
        };
    }

    componentDidMount() {
        this.getCurrencies();
    }

    componentWillReceiveProps(nextProps) {
        const base = nextProps.currency.base;
        const target = nextProps.currency.target;
        this.getCurrencies(base, target);
    }

    getCurrencies(base, target) {
        const baseCurrency = base || this.state.currency.base;
        const targetCurrency = target || this.state.currency.target;

        fetch(`https://api.fixer.io/latest?base=${baseCurrency}&symbols=${targetCurrency}`)
        .then((response) => response.json())
        .then((res) => {
            this.setState(() => {
                const currencies = targetCurrency.split(',');
                return {
                    currency: {
                        base: baseCurrency,
                        target: targetCurrency,
                        currencies,
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
                        <Text color="white" f={4} right>1{this.state.currency.base} buys {this.state.currency.rates[currency]} {currency}</Text>
                    </Box>
                ))}
            </Box>
        );
    }
}

const mapStateToProps = state => {
    return {
      currency: state.settings.currency
    }
  };
  
  const Currency = connect(
    mapStateToProps
  )(CurrencyComponent);

export default Currency;