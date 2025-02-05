"use client";
import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderName: formData.fullName,
          senderEmail: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        // Clear the form
        setFormData({
          fullName: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
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
            disabled={isSubmitting}
            className={`w-full py-4 text-white font-bold rounded-lg transition-all duration-300 
    ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : ""}
    ${
      isSubmitted
        ? "bg-green-500"
        : "bg-black dark:bg-white dark:text-black hover:bg-opacity-80"
    }
  `}
          >
            {isSubmitting
              ? "Sending..."
              : isSubmitted
              ? "Message sent!"
              : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
