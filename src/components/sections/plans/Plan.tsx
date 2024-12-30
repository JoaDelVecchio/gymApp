import { Plan as PlanType } from "@/types/types";

const Plan = ({
  plan,
  handleBuy,
}: {
  plan: PlanType;
  handleBuy: (planId: number) => void;
}) => {
  return (
    <div
      key={plan.id}
      className="flex flex-col bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-transform duration-300"
    >
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          {plan.name}
        </h3>
        <p className="text-blue-600 font-bold mb-4">{plan.tagline}</p>
        <p className="text-gray-600 mb-4 text-lg">
          <span className="text-gray-900 font-bold">
            ${plan.price}.00 USD {plan.price === 400 ? "(2 Months FREE)" : ""}
          </span>{" "}
          / {plan.duration}
        </p>
        <ul className="text-gray-600 mb-6">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => handleBuy(plan.id)}
        className="mt-auto w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
      >
        Join Now
      </button>
    </div>
  );
};

export default Plan;
