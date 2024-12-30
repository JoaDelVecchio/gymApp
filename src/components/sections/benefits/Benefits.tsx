import benefit1 from "../../../assets/benefit1.jpg";
import benefit2 from "../../../assets/benefit2.jpg";
import benefit3 from "../../../assets/benefit3.jpg";
import Card from "../../Card";

const benefitsData = [
  {
    img: benefit1,
    title: "Modern Equipment",
    description: "Top-of-the-line machines for all your fitness needs.",
  },
  {
    img: benefit2,
    title: "Expert Trainers",
    description: "Our trainers are here to guide you every step of the way.",
  },
  {
    img: benefit3,
    title: "Community",
    description: "Join a supportive environment that keeps you motivated.",
  },
];

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="py-16 bg-gray-50 text-center px-6 md:px-12"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-black">
        Why Choose Jym?
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
        Unlock your potential with state-of-the-art equipment, expert trainers,
        and a supportive community that motivates you to achieve your goals.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {benefitsData.map((benefit, index) => (
          <Card
            key={index}
            img={benefit.img}
            title={benefit.title}
            description={benefit.description}
            imgHeight="h-96" // Custom height for benefits
          />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
