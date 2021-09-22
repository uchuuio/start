import useSWR from 'swr';
import fetcher from '../../utils/fetcher';

const Currency = () => {
    const baseCurrency = 'GBP';
    const targetCurrency = 'USD,JPY';
    const {data, error} = useSWR(`https://frankfurter.app/latest?base=${baseCurrency}&symbols=${targetCurrency}`, fetcher, {revalidateOnFocus: false});

    if (!data?.rates) return (<p>Loading...</p>);
    if (error) return (<p>Issue loading currencies</p>);

    return (
        <div className="font-normal">
            {Object.keys(data.rates).map(currency => {
                if (currency === 'JPY') {
                    return <p key={currency}>£1 buys {data.rates[currency]}円</p>
                };
                if (currency === 'USD') {
                    return <p key={currency}>£1 buys ${data.rates[currency]}</p>
                };

                return null;
            })}
        </div>
    )
};

export default Currency;