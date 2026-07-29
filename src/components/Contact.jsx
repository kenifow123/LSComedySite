import styles from "../styles/Contact.module.css";


const Contact = () => {
    return (
        <section id='contact' className={styles.contact}>
            <div className={styles.contactDiv}>
                <h1>Get in touch</h1>

                <form className={styles.formContainer}>
                    <label htmlFor='name'>Name: <input id='name' type="text"/></label>


                    <label htmlFor='email'>Email: <input id='email' type="text"/></label>


                    <label className={styles.message} htmlFor='message'>Message: <textarea id='message'/></label>



                    <button>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;