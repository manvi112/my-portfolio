import './ProjectPage.css';
import pic from "../../assets/chatbot-image.png";

export function ProjectPage() {
  return(
    <section className="projects">
      <div className="project-card">


        <div className="project-media" >
          <img src={pic} />
        </div>

        <div className="project-content">
          <h3 className="project-title">Chatbot Interface Application</h3>
        

        <p className="project-description">
          A rule-based chatbot built with React, focused on message handling,
conditional logic, and clean interface flow.

        </p>

        <div className="project-stack">
          <span>React</span>
          <span>Javascript</span>
          <span>HTML/CSS</span>
        </div>

        <div className="project-actions">
          <a className="btn primary">Demo</a>
          <a className="btn secondary">GitHub</a>
        </div>
        </div>

      </div>
    </section>
  );
}