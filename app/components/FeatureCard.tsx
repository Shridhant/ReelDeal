import { motion } from "motion/react";

interface FeatureCardProps {
  icon: React.ReactNode; // For React elements like SVGs or images
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-lg p-6 border-2 border-blue-400 ">
      <div className="flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-400">{description}</p>
    </div>
  );
}

export default FeatureCard;
