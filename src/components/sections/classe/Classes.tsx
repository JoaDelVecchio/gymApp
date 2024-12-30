// components/sections/Classes.tsx
import class1 from "../../../assets/class1.jpg";
import class2 from "../../../assets/class2.jpg";
import class3 from "../../../assets/class3.jpg";
import Card from "../../Card";

const classesData = [
  {
    img: class1,
    title: "HIIT",
    description:
      "Burn calories and boost your energy with high-intensity workouts.",
  },
  {
    img: class2,
    title: "Yoga",
    description: "Find your balance with expert-led yoga classes.",
  },
  {
    img: class3,
    title: "Strength Training",
    description: "Build muscle and gain confidence with structured workouts.",
  },
];

const Classes = () => {
  return (
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
        {classesData.map((classItem, index) => (
          <Card
            key={index}
            img={classItem.img}
            title={classItem.title}
            description={classItem.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Classes;
