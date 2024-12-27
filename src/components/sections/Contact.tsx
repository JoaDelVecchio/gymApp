import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    const formattedData = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    setIsLoading(true);
    try {
      await emailjs.send(
        "service_93b8tv6",
        "template_ypk9xqv",
        formattedData,
        "eBrHN3Rkgz9JCTwgv"
      );
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("There was an error sending the message. Try Again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white text-center px-6 md:px-12">
      <h2 className="text-4xl md:text-5xl font-bold text-black">
        Join Us Today
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
        Ready to transform your life? Contact us to get started on your fitness
        journey.
      </p>
      <form className="mt-8 max-w-md mx-auto" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
          aria-label="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
          aria-label="Email"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
          rows={4}
          aria-label="Message"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
      {status && <p className="mt-4 text-green-600">{status}</p>}
    </section>
  );
};

export default Contact;
