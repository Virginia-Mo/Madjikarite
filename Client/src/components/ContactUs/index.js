import React, { useRef } from 'react';
import ReCaptcha from "react-google-recaptcha"
import emailjs from '@emailjs/browser';

import './style.scss';

const ContactUs = () => {
  // Create a reference to the form so we can access it later
  const form = useRef();
  //use emailJS to send the email
  const sendEmail = (e) => {
    e.preventDefault();
   
    emailjs.sendForm(
      process.env.EMAIL_JS_SERVICE,
      process.env.EMAIL_JS_TEMPLATE,
      form.current,
      process.env.EMAIL_JS_KEY
    )
      .then((result) => {
        // If the email is sent successfully, alert the user
        if (result.status === 200) {
          alert("Votre message a bien été envoyé.");
          // Reset the form
          form.current.reset();
        }
      }, (error) => {
        // If the email is not sent successfully, alert the user
        if (error.status === 400) {
          alert("Veuillez remplir tous les champs et valider le captcha.");
        }
      });
  };

  return (
    <div className="contact-us">

      <h2 className="contact-us__title">Formulaire de contact</h2>

      <form className="contact-us-form" ref={form} onSubmit={sendEmail}>
        <div className="contact-us-form__container">
          <label className="contact-us-form__label">
            Votre nom
          </label>
          <input className="contact-us-form__input" type="text" name="user_name" required="required"/>
          <label className="contact-us-form__label">
            Votre courriel
          </label>
          <input className="contact-us-form__input" type="email" name="user_email" required="required"/>
          <label className="contact-us-form__label">
            Message
          </label>
          <textarea className="contact-us-form__textarea" name="message" required="required"/>
          <ReCaptcha 
            className="contact-us-form__recaptcha"
            sitekey={process.env.CAPTCHA_SITE_KEY} 
            size="compact"
          />     
          <input className="contact-us-form__submit-button" type="submit" value="Envoyer votre message" />
        </div>

      </form>
    </div>
  );
};

export default ContactUs;
