import styles from "../styles/Videos.module.css";
import video1 from '../assets/video1.gif'
import video2 from '../assets/video2.gif'
import video3 from '../assets/video3.gif'


const Videos = () => {
    return (
        <section className={styles.videos}>
            <div className={styles.videoDiv}>
                <img className={styles.video} src={video1}></img>
                <h2 className={styles.overlayText}>video 1</h2>
            </div>
            <div className={styles.videoDiv}>
                <img className={styles.video} src={video2}></img>
                <h2 className={styles.overlayText}>video 2</h2>

            </div>
            <div className={styles.videoDiv}>
                <img className={styles.video} src={video3}></img>
                <h2 className={styles.overlayText}>video 3</h2>

            </div>

        </section>
    )
}

export default Videos;