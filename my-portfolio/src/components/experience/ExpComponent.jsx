import './ExpComponent.css';
import { experiences } from "../../data/ExperienceData";


export function ExpComponent() {
  return(
    <>
    <section className="experience-section">
      <h2 className="experience-title">Experience</h2>

      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-content">
              <h3>{exp.role}</h3>

              <p className="experience-meta">
                <span className="company">{exp.company}</span>
                <span>{exp.type} | {exp.duration} | {exp.location}</span>
              </p>

              <p className="experience-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}