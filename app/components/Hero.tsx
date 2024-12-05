import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Create Captivating Content with AI
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-neutral-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Revolutionize your content strategy with our AI-powered platform
        </motion.p>
        <Link href="/home">
          <motion.button
            className="bg-indigo-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-600 transition-colors duration-300 flex items-center mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            Get Started Free <ArrowRight className="ml-2" />
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
