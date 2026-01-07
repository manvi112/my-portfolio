import './SkillsComponent.css';
import { skillsRowOne, skillsRowTwo } from "../../data/SkillsData";

export function SkillsComponent() {
  return(
    <>
    <section className="skills">
      <h2 className="skills-title">Technologies I Work With</h2>

      <div className="skills-rotate">
        <div className="skills-track left">
          {[...skillsRowOne, ...skillsRowOne].map((skill, i) => (
            <div className="skill-card" key={i}>
            <img src={skill.logo} alt={skill.name} />
              <span className="tooltip">{skill.name}</span>
        </div>
          ))}
        </div>
      </div>

      <div className="skills-rotate">
        <div className="skills-track right">
          {[...skillsRowTwo, ...skillsRowTwo].map((skill, i) => (
            <div className="skill-card" key={i}>
            <img src={skill.logo} alt={skill.name} />
              <span className="tooltip">{skill.name}</span>
        </div>
          ))}
        </div>
      </div>

    </section>
    </>
  );
}