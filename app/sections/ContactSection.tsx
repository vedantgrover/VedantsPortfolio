"use client";
import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center min-h-screen p-4 md:p-8"
    >
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl font-[500] text-center tracking-[.4px] text-black dark:text-white mb-8">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <input
            type="text"
            name="firstName"
            placeholder="Full Name"
            value={formData.firstName}
            onChange={handleChange}
            className="p-4 border-2 border-zinc-300 dark:border-zinc-600 rounded-2xl 
                     bg-white dark:bg-zinc-700 text-black dark:text-white
                     focus:outline-none focus:border-zinc-700 dark:focus:border-white
                     transition-colors"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 border-2 border-zinc-300 dark:border-zinc-600 rounded-2xl 
                     bg-white dark:bg-zinc-700 text-black dark:text-white
                     focus:outline-none focus:border-zinc-700 dark:focus:border-white
                     transition-colors"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="p-4 border-2 border-zinc-300 dark:border-zinc-600 rounded-2xl 
                     bg-white dark:bg-zinc-700 text-black dark:text-white
                     focus:outline-none focus:border-zinc-700 dark:focus:border-white
                     transition-colors resize-none"
            required
          />
          <button
            type="submit"
            className="p-4 bg-[#333333] dark:bg-white text-white dark:text-black 
                     rounded-2xl font-bold text-lg hover:opacity-90 
                     transition-opacity shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
