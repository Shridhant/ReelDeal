import { motion } from "motion/react";

interface FeatureCardProps {
  icon: React.ReactNode; // For React elements like SVGs or images
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-neutral-800 rounded-lg p-6 transition-transform duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-400">{description}</p>
    </motion.div>
  );
}

export default FeatureCard;
