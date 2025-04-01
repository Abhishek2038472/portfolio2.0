import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS SDK

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service and template info (You need to replace these with your values)
    const serviceID = 'service_hxx5fhc';    // Replace with your EmailJS Service ID
    const templateID = 'template_is8a3uc';  // Replace with your EmailJS Template ID
    const userID = 'v7ZAJ_TUnIMh_UKz0';     // Replace with your EmailJS User ID

    // Map formData to match the placeholders in your EmailJS template
    const emailData = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, emailData, userID)
      .then(
        (response) => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setStatus('Failed to send the message. Please try again later.');
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-bannerImg">
      <div className="w-full max-w-md p-8 bg-bannerImg rounded-lg shadow-lg transition-transform hover:scale-105">
        <h2 className="text-4xl font-bold text-center mb-6 text-white">You Can Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold text-white">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold text-white">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold text-white">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows="4"
              className="w-full p-3 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded font-semibold text-lg shadow-md transition-transform transform hover:bg-blue-600 hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>

        {status && (
          <div className="mt-6 text-center">
            <p className={`text-lg font-semibold ${status === 'Message sent successfully!' ? 'text-green-600' : 'text-red-600'}`}>
              {status}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
