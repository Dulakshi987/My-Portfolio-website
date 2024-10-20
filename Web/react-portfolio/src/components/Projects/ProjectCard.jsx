import { getImageUrl } from "../../utils";
import Styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: {title, imageSrc, description, skills, source},
}) => {
  return (
    <div className={Styles.container}>
    <img src={getImageUrl(imageSrc)}
     alt={`${title}`}
     className={Styles.image}/>
    <h3 className={Styles.title}>{title}</h3>
    <p className={Styles.description}>{description}</p>
    <ul className={Styles.skills}>
      {skills.map((skill, id) =>{
        return(
        <li key={id}
        className={Styles.skill}>{skill}

        </li>
        );
      })}
    </ul>
    <div className={Styles.links}>
      <a href={source}
      className={Styles.link}>SOURCE</a>
      </div>
  </div>
  );
}
