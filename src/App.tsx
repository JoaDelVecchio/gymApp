import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Header from "./components/Header";

import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpeg";
import benefit1 from "./assets/benefit1.jpg";
import benefit2 from "./assets/benefit2.jpg";
import benefit3 from "./assets/benefit3.jpg";
import class1 from "./assets/class1.jpg";
import class2 from "./assets/class2.jpg";
import class3 from "./assets/class3.jpg";

const App = () => {
  return (
    <div className="app font-sans">
      {/* Header */}
      <Header />

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="h-screen flex flex-col items-center justify-center bg-white text-center "
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            navigation={true} // Enable navigation arrows
            modules={[Navigation]} // Pass Navigation as a module
            className="w-full h-screen"
          >
            <SwiperSlide>
              <div
                className="h-full flex flex-col items-center justify-center bg-cover bg-center text-center relative"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${slide1})`,
                }}
              >
                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-wider uppercase leading-tight">
                  Welcome to Jym
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 mt-6 max-w-2xl">
                  Slide 1: Transform your body and mind with the ultimate
                  fitness experience.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="h-full flex flex-col items-center justify-center bg-cover bg-center text-center"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${slide2})`,
                }}
              >
                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-wider uppercase leading-tight">
                  Your Fitness Journey
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 mt-6 max-w-2xl">
                  It's not just a gym—it's a lifestyle.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="h-full flex flex-col items-center justify-center bg-cover bg-center text-center"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${slide3})`,
                }}
              >
                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-wider uppercase leading-tight">
                  Empower Yourself
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 mt-6 max-w-2xl">
                  The best time to start is now.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
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
                src={benefit1}
                alt="Benefit 1"
                className="w-96 h-96 object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">Modern Equipment</h3>
              <p className="text-gray-600 mt-2">
                Top-of-the-line machines for all your fitness needs.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={benefit2}
                alt="Benefit 2"
                className="w-96 h-96 object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">Expert Trainers</h3>
              <p className="text-gray-600 mt-2">
                Our trainers are here to guide you every step of the way.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={benefit3}
                alt="Benefit 3"
                className="w-96 h-96 object-cover"
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
                src={class1}
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
                src={class2}
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
                src={class3}
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
