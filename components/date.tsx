import {fromUnixTime, format} from 'date-fns';

export default function Date({ dateString }): JSX.Element {
    const date = fromUnixTime(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
    }