import './Date.css'
import moment from 'moment'
const DateDisplay = (props) => {
    const { date } = props;
    return (
        <>
            <section className="date-display">
                My date is: {moment(date).format('ll')}
            </section>
        </>
    );
}

export default DateDisplay;