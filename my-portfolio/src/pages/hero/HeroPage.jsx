import './HeroPage.css';
import { RevealText } from "../../components/RevealText";



export function HeroPage() {


  return(
    <>
    <section className="hero">
      <div className="hero-inner">

        <div className="status">
          <span className="status-text">Open to work</span>
        </div>

        
        <h1 className="hero-title">
          <RevealText>Fullstack</RevealText><br />
          <RevealText>Developer</RevealText>
        </h1>

        <p className="hero-description">
          I build web-based projects,<br />explore AI and machine learning,<br />and enjoy turning ideas into meaningful digital solutions while learning along the way.
        </p>

      </div>
    </section>
    </>
  );
}