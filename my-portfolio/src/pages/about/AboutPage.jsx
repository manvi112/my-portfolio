import './AboutPage.css';
import avatar from '../../assets/avataaars.svg';
import { HoverCard } from "../../components/HoverCard";


export function AboutPage() {
  return(
    <>
     <section className="about" id="about">
      <div className="about-container">

        <div className="about-content">
          <h2 className="about-title">
            About
          </h2>

          <p>
            I'm a final-year Computer Science student based in Ahmedabad, Gujarat.
            I currently focus on front-end development, where I enjoy building clean, responsive, and interactive interfaces using modern web technologies. Along the way, I've also gained experience with full-stack development, working with React, Node.js, and SQL to understand how complete web applications come together.
          </p>

          <p>
            Right now, I'm exploring different opportunities,learning through hands-on experience, and growing as a developer by creating things that feel both useful and thoughtful.
          </p>
        </div>

        <div className="about-avatar">
          <HoverCard>
          <img src={avatar}
          alt="Avatar Illustration">
          </img>
          </HoverCard>
        </div>
      </div>
     </section>
    </>
  );
}