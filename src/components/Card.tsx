type CardProps = {
  img: string;
  title: string;
  description: string;
  imgHeight?: string; // Optional height for different layouts
};

const Card = ({ img, title, description, imgHeight = "h-40" }: CardProps) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={img}
        alt={title}
        className={`w-full ${imgHeight} object-cover rounded-lg`}
      />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default Card;
