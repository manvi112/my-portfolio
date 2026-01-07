import './ContactComp.css';

export function ContactComp() {
  return(
    <>
    <section className="contact" id="contact">
      <div className="contact-wrapper">


        <div className="contact-form">
          <h2>Send a Message</h2>

          <div className="field">
            <label>Name</label>
            <input type="text" placeholder="Grecia Catherine" />
          </div>

          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="graciacatherine@gmail.com" />
          </div>

          <div className="field">
            <label>Message</label>
            <textarea placeholder="Have a project in mind?
Let's build something together!" />
          </div>

          <button className="submit-btn">Submit</button>
        </div>

        <div className="contact-info">
          <p className="connect-title">Connect with me at:</p>

          <div className="at-info">
            <div className="info-card">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=patelmanvi1101@gmail.com">Email</a>
            </div>

            <div className="info-card">
              <a
                href="https://www.linkedin.com/in/manvipatel"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}