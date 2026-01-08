import './ProjectPage.css';
import { projects } from "../../data/ProjectsData";
import { HoverCard } from "../../components/HoverCard";


export function ProjectPage() {
  return (
    <section className="projects" id="project">
      {projects.map((project) => (
        <HoverCard key={project.id}>
        <div className="project-card" >
          
          <div className="project-media">
              <img src={project.image} alt={project.title} />
          </div>

          <div className="project-content">
            <h3 className="project-title">{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-stack">
              {project.stack.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>

            <div className="project-actions">
              {/* <a className="btn primary" href={project.demo}>Demo</a> */}
              <a className="btn secondary" href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

        </div>
        </HoverCard>
      ))}
    </section>
  );
}
