import './AboutPage.css';
import avatar from '../../assets/avataaars.svg';

export function AboutPage() {
  return(
    <>
     <section className="about">
      <div className="about-container">

        <div className="about-content">
          <h2 className="about-title">
            About
          </h2>

          <p>
            I'm a frontend-focused developer who enjoys building clean,
            structured, and user-friendly web experiences. I care a lot about
            layout, interaction flow, and writing maintainable code.
          </p>

          <p>
            I mostly work with React and modern CSS, and I like turning designs
            into responsive interfaces that actually feel good to use.
          </p>
        </div>

        <div className="about-avatar">
          <img src={avatar} alt="Avatar Illustration">
          </img>
        </div>
      </div>
     </section>
    </>
  );
}