import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

const Time = () => {
    const formatDate = (date: Date) => format(date, 'doMMMMyyyy', {locale: ja})
    const formatDay = (date: Date) => format(date, 'eeee', {locale: ja})
    const formatTime = (date: Date) => format(date, 'kk:mm:ss', {locale: ja})

    const [currentDate, updateDate] = useState(formatDate(new Date()));
    const [currentDay, updateDay] = useState(formatDay(new Date()));
    const [currentTime, updateTime] = useState('loading');

    useEffect(() => {
        const interval = setInterval(() => {
            updateDate(formatDate(new Date()));
            updateDay(formatDay(new Date()));
            updateTime(formatTime(new Date()));
        }, 1000);

        return () => clearInterval(interval);
    });

    return (
        <>
            <p className="font-normal">{currentDay}</p>
            <p className="text-4xl font-normal">{currentDate}</p>
            <p className="text-3xl">{currentTime}</p>
        </>
    )
};

export default Time;
