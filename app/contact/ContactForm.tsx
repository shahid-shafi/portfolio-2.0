import React from 'react';

const ContactForm = () => {
  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
  };
  return (
    <form className="contact-form">
      <div className="name-email-fields">
        <input
          className="input-field"
          type="text"
          name="name"
          onChange={handleOnChange}
          placeholder="Name"
        />
        <input
          className="input-field"
          type="email"
          name="email"
          onChange={handleOnChange}
          placeholder="Email"
        />
      </div>
      <input
        className="input-field"
        type="text"
        name="subject"
        onChange={handleOnChange}
        placeholder="Subject"
      />
      <textarea
        rows={4}
        className="input-field"
        name="message"
        placeholder="Message"
        onChange={handleOnChange}
      />
    </form>
  );
};

export default ContactForm;
