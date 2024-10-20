import Styles from "./projects.module.css";
import projects from "../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={Styles.container} id="projects">
      <h2 className={Styles.title}>Projects</h2>
      <div className={Styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project}/>
        })}
      </div>
    </section>
  );
}
