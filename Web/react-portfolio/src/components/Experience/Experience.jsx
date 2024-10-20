
import { getImageUrl } from "../../utils";
import skills from "../data/Skills.json";
import styles from "../Experience/Experience.module.css";
import history from "../data/history.json";

export const Experience = () => {
  return (
    <section  className={styles.container} id="skills">
    <h3 className={styles.title}>Skills</h3>
    <h4 className={styles.subtitle}>TECH SKILLS</h4>
    <div  className={styles.content}>
      <div className={styles.skills}>
        {
        skills.map((skill, id) => {
          return (<div key={id} className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={getImageUrl(skill.imagesrc)} alt={skill.title}/>
            </div>
            <p>{skill.title}</p>
            </div>
        );
        })}
         </div>
      <ul className={styles.history}>
        <h2 className={styles.softtitle}>Soft Skills</h2>
        {
          history.map((historyItem, id) => {
            return <li key={id} className={styles.historyItem}>

              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}`}</h3>
              </div>
            </li>
          })
        }
      </ul>
    </div>
    </section>
  )
}



