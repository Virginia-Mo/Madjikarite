import React, { useRef } from 'react';
import ReCaptcha from "react-google-recaptcha"
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', form.current, 'zjy4R6hZ3OLhBruLh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <ReCaptcha
        sitekey={"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"} 
        onChange={onChange}
      />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;
