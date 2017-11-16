import React, { Component } from 'react';

import { format } from 'date-fns/esm';
import { es, ja, ru } from 'date-fns/esm/locale';

import { Box, Text } from 'rebass';
import styled from 'styled-components';
const StyledText = styled(Text)`
    text-align: left;
    @media screen and (max-width: 32em) {
        text-align: center;
    }
`;

class DateTime extends Component {
    constructor(props) {
        super(props);

        const locale = this.props.locale.toLowerCase();
        this.state = this.getTime(locale);
    }

    componentDidMount() {
        this.updateTimeFn = setInterval(
            () => this.updateTime(),
            1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.updateTimeFn);
    }

    componentWillReceiveProps(newProp) {
        clearInterval(this.updateTimeFn);
        this.updateTimeFn = setInterval(
            () => this.updateTime(),
            1000
        );
    }

    getTime(locale) {
        const currentDatetime = new Date();
        let month,day,dayName,time;

        switch (locale) {
            case "es":
                month = format(currentDatetime, 'MMMM', {locale: es});
                day = format(currentDatetime, 'Do', {locale: es});
                dayName = format(currentDatetime, 'dddd', {locale: es});
                time = format(currentDatetime, 'H:mm:ss', {locale: es});
                break;
            case "ja":
                month = format(currentDatetime, 'MMMM', {locale: ja});
                day = format(currentDatetime, 'Do', {locale: ja});
                dayName = format(currentDatetime, 'dddd', {locale: ja});
                time = format(currentDatetime, 'H:mm:ss', {locale: ja});
                break;
            case "ru":
                month = format(currentDatetime, 'MMMM', {locale: ru});
                day = format(currentDatetime, 'Do', {locale: ru});
                dayName = format(currentDatetime, 'dddd', {locale: ru});
                time = format(currentDatetime, 'H:mm:ss', {locale: ru});
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
        }
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
            <Box mx={2}>
                <StyledText color="white" f={5}>
                    {this.state.dayName} {this.state.day} {this.state.month}
                </StyledText>
                <StyledText color="white" f={5}>{this.state.time}</StyledText>
            </Box>
        );
    }
}

export default DateTime;