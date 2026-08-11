import styles from "../styles/Dates.module.css";
import DatesDB from './DatesDB.js'


const Dates = () => {
    return (
        <section id='dates' className={styles.dates}>
            <h1>Dates</h1>
            <div className={styles.datesList}>
                {DatesDB.map(show => (
                    <h1>{show.date} @ {show.location}</h1>
                ))}

            </div>

        </section>
    )
}

export default Dates;