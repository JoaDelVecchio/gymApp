const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white text-center px-6 md:px-12">
      <h2 className="text-4xl md:text-5xl font-bold text-black">
        Join Us Today
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
        Ready to transform your life? Contact us to get started on your fitness
        journey.
      </p>
      <form className="mt-8 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
          rows={4}
        ></textarea>
        <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
