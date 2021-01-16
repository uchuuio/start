import { formatDistanceToNowStrict } from 'date-fns';
import { ja } from 'date-fns/locale';

import useSWR from 'swr';

const Wanikani = () => {
    const formatNextReview = (nextReview: Date) => {
        return formatDistanceToNowStrict(
            new Date(nextReview),
            {addSuffix: true, locale: ja}
        );
    };
    const fetcher = (url: string) => fetch(url, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_WANIKANI_KEY}`
        }
    }).then(r => r.json());

    const {data, error} = useSWR("https://api.wanikani.com/v2/summary", fetcher, {
        revalidateOnFocus: false,
    });

    const nextReview = formatNextReview(data?.data?.next_reviews_at ?? new Date());

    let classNames = "text-3xl font-normal";
    if (!nextReview.includes('後')) {
        classNames += ' text-red-600';
    }

    return (
        <div>
            <p>Next review</p>
            <a className={classNames} href="https://www.wanikani.com/dashboard">{nextReview}</a>
        </div>
    );
};

export default Wanikani;