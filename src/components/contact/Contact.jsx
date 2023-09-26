import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineTextsms } from "react-icons/md";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cj6n9ym",
        "template_uqbafhs",
        form.current,
        "kOwOuwPd-jL8YrgiL"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h4>Get In Touch </h4>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>aukoviolet24@gmail.com</h5>
            <a href="mailto:aukoviolet24@gmail.com" target="_blank">
              Send Mail
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+254 795522373</h5>
            <a
              href="https://api.whatsapp.com/send?phone+254795522373"
              target="_blank"
            >
              Send message
            </a>
          </article>

          <article className="contact_option">
            <MdOutlineTextsms className="contact_option-icon" />
            <h4>SMS</h4>
            <h5>aukoviolet24@gmail.com</h5>
            <a
              href="https://api.whatsapp.com/send?phone+254795522373"
              target="_blank"
            >
              Send SMS
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            row="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
