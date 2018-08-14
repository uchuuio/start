import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrency } from '../../actions/currency';

import { isAfter } from 'date-fns';
import { Box, Text } from 'rebass';

export const CurrencyComponent = props => {
  let wasFetchedNotRecently = false;
  if (isAfter(new Date(), props.currency.nextFetch)) {
    wasFetchedNotRecently = true;
  }

  if (
    (props.currency.lastFetched === '' || wasFetchedNotRecently) &&
    props.currency.isFetching === false
  ) {
    props.fetchLatestCurrency(props.currency.base, props.currency.target);
  }

  let currencies = [props.currency.target];
  if (props.currency.target.includes(',')) {
    currencies = props.currency.target.split(',');
  }

  let alignment = '';
  if (!props.modules.weather && !props.modules.currency) {
    alignment = 'center';
  }

  return (
    <Box className="currency" mx={2}>
      {currencies.map((currency, i) => (
        <Box key={i}>
          <Text style={{ textAlign: alignment }} f={4}>
            1{props.currency.base} buys {props.currency.rates[currency]}{' '}
            {currency}
          </Text>
        </Box>
      ))}
    </Box>
  );
};;

const mapStateToProps = state => {
  return { modules: state.settings.modules, currency: state.currency };
};

const mapDispatchToProps = dispatch => ({
  fetchLatestCurrency: (baseCurrency, targetCurrency) => {
    dispatch(fetchCurrency(baseCurrency, targetCurrency));
  },
});

const Currency = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyComponent);

export default Currency;
