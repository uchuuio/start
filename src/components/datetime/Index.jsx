import React, { Component } from 'react';

import { format } from 'date-fns';
import jaLocale from 'date-fns/locale/ja';

import { Box, Text } from 'rebass';

class DateTime extends Component {
    constructor(props) {
        super(props);

        const currentDatetime = new Date();
        const monthJP = format(currentDatetime, 'MMMM', {locale: jaLocale});
        const monthEN = format(currentDatetime, 'MMMM');
        const day = format(currentDatetime, 'Do', {locale: jaLocale});
        const dayNameJP = format(currentDatetime, 'dddd', {locale: jaLocale});
        const dayNameEN = format(currentDatetime, 'dddd');
        const time = format(currentDatetime, 'H:mm:ss', {locale: jaLocale});

        this.state = {
            month: {
                jp: monthJP,
                en: monthEN,
            },
            day,
            dayName: {
                jp: dayNameJP,
                en: dayNameEN,
            },
            time,
        };
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

    updateTime() {
        this.setState(() => {
            const currentDatetime = new Date();
            const monthJP = format(currentDatetime, 'MMMM', {locale: jaLocale});
            const monthEN = format(currentDatetime, 'MMMM');
            const day = format(currentDatetime, 'Do', {locale: jaLocale});
            const dayNameJP = format(currentDatetime, 'dddd', {locale: jaLocale});
            const dayNameEN = format(currentDatetime, 'dddd');
            const time = format(currentDatetime, 'H:mm:ss', {locale: jaLocale});
            return{
                month: {
                    jp: monthJP,
                    en: monthEN,
                },
                day,
                dayName: {
                    jp: dayNameJP,
                    en: dayNameEN,
                },
                time,
            };
        });
    }

    render() {
        return (
            <Box>
                <Text right color="white" f={7}>
                    <span title={this.state.dayName.en}>{this.state.dayName.jp}</span>&nbsp;
                    {this.state.day}&nbsp;
                    <span title={this.state.month.en}>{this.state.month.jp}</span>
                </Text>
                <Text right color="white" f={7}>{this.state.time}</Text>
            </Box>
        );
    }
}

export default DateTime;