import styles from "../styles/Dates.module.css";
import dates from '../assets/dates.jpg'


const Dates = () => {
    return (
        <section id='dates' className={styles.dates}>
            <h1>Dates</h1>
            <div className={styles.datesList}>
                <h1>7/27 @ home</h1>
                <h1>8/8 @ SF</h1>
                <h1>7/27 @ home</h1>
                <h1>9/1 @ los angeles</h1>
                <h1>10/1 @ seattle</h1>

            </div>

        </section>
    )
}

export default Dates;