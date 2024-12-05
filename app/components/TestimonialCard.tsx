import { motion } from "motion/react";

interface TestimonialCardProps {
  quote: string;
  author: string;
}

function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <motion.div
      className="border-2 border-blue-400 rounded-lg p-6"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <p className="mb-4 italic">&quot;{quote}&quot;</p>
      <p className="text-neutral-400 font-semibold">- {author}</p>
    </motion.div>
  );
}

export default TestimonialCard;
