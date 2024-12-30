import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import slide1 from "../../../assets/slide1.jpg";
import slide2 from "../../../assets/slide2.jpg";
import slide3 from "../../../assets/slide3.jpeg";

const slides = [
  {
    image: slide1,
    title: "Welcome to Jym",
    description:
      "Transform your body and mind with the ultimate fitness experience.",
  },
  {
    image: slide2,
    title: "Your Fitness Journey",
    description: "It's not just a gym—it's a lifestyle.",
  },
  {
    image: slide3,
    title: "Empower Yourself",
    description: "The best time to start is now.",
  },
];

const Home = () => (
  <section id="home" className="h-screen flex flex-col bg-white text-center">
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 3000 }}
      loop
      className="w-full h-screen"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="h-full flex flex-col items-center justify-center bg-cover bg-center relative"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${slide.image})`,
            }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-wider uppercase">
              {slide.title}
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mt-6 max-w-2xl">
              {slide.description}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Home;
