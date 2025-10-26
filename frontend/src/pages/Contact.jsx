import React, { useState } from 'react';
import Heading from './Heading';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Basic form validation
    if (!name || !email || !message) {
      toast.error("Please fill all fields.");
      return;
    }

    try {
      const res = await axios.post('http://localhost:8001/api/contact', formData);
      toast.success(res.data.message || "Message sent!");
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong.");
    }
  };
useEffect(() => {
      Aos.init();
    }, []);
  return (
    <section id="contact" className="py-16 ">
      <Heading head="CONTACT" />
      <div 
      data-aos='zoom-in'
      className="flex justify-center px-6 mt-5 overflow-hidden">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-slate-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-slate-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-slate-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-white font-medium rounded hover:bg-yellow-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer autoClose={2000} position="bottom-right" />
    </section>
  );
};

export default Contact;
