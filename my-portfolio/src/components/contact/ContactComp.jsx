import './ContactComp.css';

export function ContactComp() {

async function handleSubmit(e) {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value,
  };

  try {
    const submitBtn = e.target.querySelector('.submit-btn');
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    await fetch("https://script.google.com/macros/s/AKfycbwLXfuRigofEUXHCLcDCmdPe37ZrgjbGCsyd3OV2YmyJvtlUhpfcYmb644t5muIZs0j0A/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    await new Promise(resolve => setTimeout(resolve, 1000));

    alert("Message sent successfully!");
    e.target.reset();
    
    submitBtn.textContent = 'Submit';
    submitBtn.disabled = false;

  } catch (error) {
    console.error("Error:", error);
    alert("Failed to send message. Please try again.");
    
    const submitBtn = e.target.querySelector('.submit-btn');
    submitBtn.textContent = 'Submit';
    submitBtn.disabled = false;
  }
}


  return(
    <>
    <section className="contact" id="contact">
      <div className="contact-wrapper">


        <div className="contact-form">
          <h2>Send a Message</h2>

          <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Grecia Catherine" required/>
          </div>

          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="graciacatherine@gmail.com" required/>
          </div>

          <div className="field">
            <label>Message</label>
            <textarea name="message" placeholder="Have a project in mind?
Let's build something together!" required />
          </div>

          <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
       

        <div className="contact-info">
          <p className="connect-title">Let's connect:</p>

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