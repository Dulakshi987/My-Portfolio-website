import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hii, I am Dulakshi Keshani</h1>
    <p className={styles.description}> I am an undergraduate <b>SOFTWARE ENGINEERING</b> student at Cardiff Metropolitan University.</p>
    <p className={styles.description1}><i>During my academy period, I have developed knowledge and skills in the software engineering industry, and through projects and self-study, I have developed further, and I am more interested in the web development and project management.</i></p>
 
 
 <a href="mailto:dulakshikeshani288@gmail.com" className={styles.contactBtn}>CONTACT ME</a>
 </div>
 <img src={getImageUrl("hero/Myimage01.jpg")} alt="Hero image tome" className={styles.heroimg}/>
  <div className={styles.topBlur}/>
  <div className={styles.bottomBlur}/>

  </section>
};
