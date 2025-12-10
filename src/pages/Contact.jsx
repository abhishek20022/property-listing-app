import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const handleSubmit = (data) => {
    console.log("Contact message:", data);
    alert("Thanks! Your message was sent (mock). We'll get back to you soon.");
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>If you have questions or want to list your property, send us a message.</p>
      <ContactForm onSubmit={handleSubmit} />
      <div className="contact-info">
        <h4>Office</h4>
        <p>Bihar, India</p>
        <p>Phone: +91 8603478267</p>
        <p>Email: abhishekkrsam324@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
