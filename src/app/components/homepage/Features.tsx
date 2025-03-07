import { FaTruck, FaShieldAlt, FaUndo, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaTruck className="text-red-500 text-3xl" />,
    title: "Easy Free Delivery",
    description: "No extra cost, completely free",
  },
  {
    icon: <FaShieldAlt className="text-red-500 text-3xl" />,
    title: "Get Premium Warranty",
    description: "High-quality with priority service",
  },
  {
    icon: <FaUndo className="text-red-500 text-3xl" />,
    title: "Easy Free Return",
    description: "No rush, take time to decide",
  },
  {
    icon: <FaHeadset className="text-red-500 text-3xl" />,
    title: "24*7 Online Support",
    description: "Fast and efficient premium service",
  },
];

export default function Features() {
  return (
    <section className="py-10 px-3">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-0 py-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-4 w-full sm:w-1/2 md:w-1/4 px-4 text-center md:text-left"
          >
            {feature.icon}
            <div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
