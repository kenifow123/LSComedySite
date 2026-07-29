import { Link } from "react-router";
import styles from "../styles/Nav.module.css"
import { useContext } from "react";


const Nav = () => {

    return (
        <div className={styles.navBar}>
            <a id={styles.yourName} href="/#">Lillian Sam</a>
            <div className={styles.linksDiv}>
                <a href="/#dates">Dates</a>
                <a href="/#videos">Videos</a>
                <a href="/#contact">Contact</a>
            </div>
        </div>
    )
}

export default Nav;