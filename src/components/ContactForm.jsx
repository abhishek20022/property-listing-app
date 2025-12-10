import React, { useState } from "react";

const ContactForm = ({ onSubmit, initialSubject = "" }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "", subject: initialSubject });

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    // basic validation
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all required fields.");
      return;
    }
    onSubmit(form);
    setForm({ name: "", email: "", message: "", subject: initialSubject });
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>
        Name *
        <input name="name" value={form.name} onChange={handleChange} />
      </label>
      <label>
        Email *
        <input name="email" value={form.email} onChange={handleChange} />
      </label>
      <label>
        Subject
        <input name="subject" value={form.subject} onChange={handleChange} />
      </label>
      <label>
        Message *
        <textarea name="message" value={form.message} onChange={handleChange} rows={5} />
      </label>
      <button type="submit" className="btn">Send Message</button>
    </form>
  );
};

export default ContactForm;
