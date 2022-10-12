import { useEffect } from 'react';
import { useState } from 'react';
import './Date.css'
import DateDisplay from './DateDisplay';
const DateContainer = () => {
    const [date, setDate] = useState(Date.now()); //useState
    useEffect(() => {
        console.log('rendered')
    }, [date])
    return (
        <>
            <input type="date" className="date-input" onChange={(e) => setDate(e.target.value)} />
            <DateDisplay date={date} />
        </>
    );
}

export default DateContainer;