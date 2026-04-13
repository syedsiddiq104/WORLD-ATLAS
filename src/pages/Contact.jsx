import React from "react";

const Contact = () => {
  const handleSubmit = (formData) => {
    let formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };
  return (
    <section className="section-contact ">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper  container">
        <form action={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            className="form-control"
            name="username"
            required
          />

          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your E-mail"
            required
          />

          <textarea
            name="message"
            className="form-control "
            placeholder="Write a message...."
            required
          ></textarea>

          <button className="button" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
