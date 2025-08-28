import React, { useState } from 'react';
import data from './data/portfolio.json';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-12" id="contact">
      <h2 className="text-3xl font-bold mb-4 text-primary">Contact</h2>
      {submitted ? (
        <div className="text-green-600 font-semibold">Thank you for reaching out!</div>
      ) : (
        <form className="max-w-md mx-auto flex flex-col gap-4 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-primary/10" onSubmit={handleSubmit}>
          <input
            className="border border-primary/30 px-4 py-2 rounded focus:ring-2 focus:ring-primary"
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="border border-primary/30 px-4 py-2 rounded focus:ring-2 focus:ring-primary"
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="border border-primary/30 px-4 py-2 rounded focus:ring-2 focus:ring-primary"
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button className="bg-primary text-white px-4 py-2 rounded-lg font-bold hover:bg-primary-dark transition" type="submit">
            Send
          </button>
        </form>
      )}
      <div className="mt-8 text-center">
        <p>Email: <a href={`mailto:${data.contact.email}`} className="text-primary font-semibold">{data.contact.email}</a></p>
        <p>Phone: {data.contact.phone}</p>
        <p>LinkedIn: <a href={data.contact.linkedin} className="text-primary font-semibold" target="_blank" rel="noopener noreferrer">{data.contact.linkedin}</a></p>
      </div>
    </section>
  );
};

export default Contact;