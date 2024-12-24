import Header from "./components/Header";

const App = () => {
  return (
    <div className="app font-sans">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="h-screen flex flex-col items-center justify-center bg-white text-center px-6 md:px-12"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-black tracking-wider uppercase leading-tight">
            Welcome to Jym
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 mt-6 max-w-2xl">
            Transform your body and mind with the ultimate fitness experience.
            It's not just a gym—it's a lifestyle.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all">
            Get Started
          </button>
        </section>

        {/* Benefits Section */}
        <section
          id="benefits"
          className="py-16 bg-gray-50 text-center px-6 md:px-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Why Choose Jym?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Unlock your potential with state-of-the-art equipment, expert
            trainers, and a supportive community that motivates you to achieve
            your goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <img
                src="path-to-your-image-1.jpg"
                alt="Benefit 1"
                className="w-24 h-24 object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">Modern Equipment</h3>
              <p className="text-gray-600 mt-2">
                Top-of-the-line machines for all your fitness needs.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="path-to-your-image-2.jpg"
                alt="Benefit 2"
                className="w-24 h-24 object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">Expert Trainers</h3>
              <p className="text-gray-600 mt-2">
                Our trainers are here to guide you every step of the way.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="path-to-your-image-3.jpg"
                alt="Benefit 3"
                className="w-24 h-24 object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">Community</h3>
              <p className="text-gray-600 mt-2">
                Join a supportive environment that keeps you motivated.
              </p>
            </div>
          </div>
        </section>

        {/* Classes Section */}
        <section
          id="classes"
          className="py-16 bg-gray-100 text-center px-6 md:px-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Explore Our Classes
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            From high-energy HIIT sessions to calming yoga classes, we have
            something for everyone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <img
                src="path-to-class-image-1.jpg"
                alt="Class 1"
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">HIIT</h3>
              <p className="text-gray-600 mt-2">
                Burn calories and boost your energy with high-intensity
                workouts.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="path-to-class-image-2.jpg"
                alt="Class 2"
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">Yoga</h3>
              <p className="text-gray-600 mt-2">
                Find your balance with expert-led yoga classes.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="path-to-class-image-3.jpg"
                alt="Class 3"
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">Strength Training</h3>
              <p className="text-gray-600 mt-2">
                Build muscle and gain confidence with structured workouts.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 bg-white text-center px-6 md:px-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Join Us Today
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Ready to transform your life? Contact us to get started on your
            fitness journey.
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
      </main>
    </div>
  );
};

export default App;
