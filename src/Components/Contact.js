import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>
      <div className="form">
        <div className="input-box">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="input-box">
          <input
            type="tel"
            name="telephone"
            id="telephone"
            placeholder="Mobile Number"
          />
          <input type="text" placeholder="Email Subject" />
        </div>
        <textarea
          placeholder="Message"
          name="field"
          id="field"
          cols="30"
          rows="10"
        />
        <input type="submit" value="Send Message" className="btn" />
      </div>
    </section>
  );
};

export default Contact;
