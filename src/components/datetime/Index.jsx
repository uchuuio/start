import React, { Component } from 'react';

import { Box, Text } from 'rebass';

const format = require('date-fns/format');
const es = require('date-fns/locale/es');
const ja = require('date-fns/locale/ja');
const ru = require('date-fns/locale/ru');

class DateTime extends Component {
  constructor(props) {
    super(props);

    const locale = this.props.locale.toLowerCase();
    this.state = this.getTime(locale);
  }

  componentDidMount() {
    this.updateTimeFn = setInterval(() => this.updateTime(), 1000);
  }

  componentWillReceiveProps() {
    clearInterval(this.updateTimeFn);
    this.updateTimeFn = setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.updateTimeFn);
  }

  getTime(locale) {
    const currentDatetime = new Date();
    let month;
    let day;
    let dayName;
    let time;

    switch (locale) {
      case 'es':
        month = format(currentDatetime, 'MMMM', { locale: es });
        day = format(currentDatetime, 'Do', { locale: es });
        dayName = format(currentDatetime, 'dddd', { locale: es });
        time = format(currentDatetime, 'H:mm:ss', { locale: es });
        break;
      case 'ja':
        month = format(currentDatetime, 'MMMM', { locale: ja });
        day = format(currentDatetime, 'Do', { locale: ja });
        dayName = format(currentDatetime, 'dddd', { locale: ja });
        time = format(currentDatetime, 'H:mm:ss', { locale: ja });
        break;
      case 'ru':
        month = format(currentDatetime, 'MMMM', { locale: ru });
        day = format(currentDatetime, 'Do', { locale: ru });
        dayName = format(currentDatetime, 'dddd', { locale: ru });
        time = format(currentDatetime, 'H:mm:ss', { locale: ru });
        break;
      default:
        month = format(currentDatetime, 'MMMM');
        day = format(currentDatetime, 'Do');
        dayName = format(currentDatetime, 'dddd');
        time = format(currentDatetime, 'H:mm:ss');
        break;
    }

    return {
      month,
      day,
      dayName,
      time,
    };
  }

  updateTime() {
    const locale = this.props.locale.toLowerCase();
    const data = this.getTime(locale);
    this.setState({
      month: data.month,
      day: data.day,
      dayName: data.dayName,
      time: data.time,
    });
  }

  render() {
    return (
      <Box className="datetime" mx={2}>
        <Text center color="white" f={7}>
          {this.state.dayName} {this.state.day} {this.state.month},
          {this.state.time}
        </Text>
      </Box>
    );
  }
}

export default DateTime;
