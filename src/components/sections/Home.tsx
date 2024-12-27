import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpeg";

const Home = () => {
  return (
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
              Transform your body and mind with the ultimate fitness experience.
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
  );
};

export default Home;
