import React from "react";

const plans = [
  {
    id: 1,
    name: "Basic Plan",
    features: [
      "Full access to top-tier gym equipment during staffed hours",
      "One complimentary personal training session to kickstart your journey",
      "Convenient access to your preferred gym location",
      "Perfect for casual fitness enthusiasts: Up to 3 visits per week",
      "Friendly staff available to assist and guide you during visits",
    ],
    tagline: "Start small, dream big! Perfect for beginners.",
    price: "$30.00",
    duration: "1 month",
  },
  {
    id: 2,
    name: "Premium Plan",
    features: [
      "24/7 unlimited access to all gym facilities—no limits, no boundaries",
      "Train anytime at any of our locations, wherever life takes you",
      "4 personalized training sessions per month to maximize results",
      "Join exclusive group classes like yoga, spinning, and Zumba",
      "Bring a friend! Enjoy a free guest pass every month",
      "Save more with exclusive discounts on gym merchandise",
    ],
    tagline: "Push your limits with premium access and personal guidance.",
    price: "$40.00",
    duration: "1 month",
  },
  {
    id: 3,
    name: "Yearly Plan",
    features: [
      "Train without limits: 24/7 access to all gym locations year-round",
      "Priority booking for sought-after classes and special events",
      "12 one-on-one personal training sessions tailored to your goals",
      "VIP access to advanced group classes like HIIT and Pilates",
      "Annual fitness assessment and goal-setting session to track progress",
      "Stay motivated with a free premium gym bag and water bottle",
    ],
    tagline: "Commit to greatness—your fitness future starts here.",
    price: "$400.00 (2 Months FREE)",
    duration: "12 months",
  },
];

const Plans = () => {
  const handleBuy = (planId: number) => {
    console.log(`Buying plan with ID: ${planId}`);
  };

  return (
    <section id="plans" className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {plan.name}
              </h3>
              <p className="text-blue-600  font-bold mb-4">{plan.tagline}</p>
              <p className="text-gray-600 mb-4 text-lg">
                <span className="text-gray-900 font-bold">{plan.price}</span> /{" "}
                {plan.duration}
              </p>
              <ul className="text-gray-600 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleBuy(plan.id)}
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
