import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1 id="contact">Contact</h1>
      <div className="contact-flex">
        <form className="form">
          <label type="text" className="name">
            Name:
          </label>
          <input type="text" id="nmid"></input>

          <label type="text" className="email">
            E-mail:
          </label>
          <input type="text" id="emid"></input>

          <label type="text" className="message">
            Message:
          </label>
          <textarea id="msgid" rows="6" placeholder="Type your message here." />
          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
