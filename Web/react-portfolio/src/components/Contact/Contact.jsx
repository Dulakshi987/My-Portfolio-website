
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
  return( 
   <footer id="contact" className={styles.container}>
    <div className={styles.text}>
<h2>Contact with me</h2>

    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.jpg")} alt={"Email Icon"}/>
            <a href={"mailto:myemail@email.com"}>dulakshikeshani@288.com</a>
        </li>

        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedln.png")} alt={"Linkedln"}/>
            <a href={"https://www.linkedin.com/in/dulakshi-keshani-4a9558294/"}>linkedin.com</a>
        </li>

        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt={"Github Icon"} />
            <a href={"https://github.com/Dulakshi987"}>github.com</a>
        </li>

    </ul>
  </footer>
  );
};
