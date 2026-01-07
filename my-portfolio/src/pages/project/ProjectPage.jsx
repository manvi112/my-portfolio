import './ProjectPage.css';
import { projects } from "../../data/ProjectsData";

export function ProjectPage() {
  return (
    <section className="projects" id="project">
      {projects.map((project) => (
        <div className="project-card" key={project.id}>
          
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
              <a className="btn secondary" href={project.github}>GitHub</a>
            </div>
          </div>

        </div>
      ))}
    </section>
  );
}

























//       <div className="project-card">


//         <div className="project-media" >
//           <img src={pic} />
//         </div>

//         <div className="project-content">
//           <h3 className="project-title">Chatbot Interface Application</h3>
        

//         <p className="project-description">
//           A rule-based chatbot built with React, focused on message handling,
// conditional logic, and clean interface flow.

//         </p>

//         <div className="project-stack">
//           <span>React</span>
//           <span>Javascript</span>
//           <span>HTML/CSS</span>
//         </div>

//         <div className="project-actions">
//           <a className="btn primary">Demo</a>
//           <a className="btn secondary">GitHub</a>
//         </div>
//         </div>

//       </div>
//     </section>
//   );
// }